import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_03usbqr.css';
import '../../css/v/vbgovvbfb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="clr-i-solid clr-i-solid-path-1 j_03usbqr"/><path class="clr-i-solid clr-i-solid-path-2 vbgovvbfb"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:paint-roller-solid",
	});
}

export default Component;
