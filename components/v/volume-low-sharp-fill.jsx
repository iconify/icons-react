import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/guf8c5zsg.css';
import '../../css/v/vld2nvbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="guf8c5zsg"/><path class="vld2nvbwq"/></g>`,
		"fallback": "keyline-icons:volume-low-sharp-fill",
	});
}

export default Component;
