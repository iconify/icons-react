import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io862rkbx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io862rkbx"/>`,
		"fallback": "bi:usb-plug-fill",
	});
}

export default Component;
