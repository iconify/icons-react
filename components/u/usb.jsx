import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2tf6pbhp.css';

const viewBox = {"width":304,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2tf6pbhp"/>`,
		"fallback": "zmdi:usb",
	});
}

export default Component;
