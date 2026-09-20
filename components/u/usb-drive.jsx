import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_yv6gb-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_yv6gb-i"/>`,
		"fallback": "ix:usb-drive",
	});
}

export default Component;
