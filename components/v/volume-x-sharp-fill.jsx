import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/guf8c5zsg.css';
import '../../css/w/wz_ohib0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="guf8c5zsg"/><path class="wz_ohib0s"/></g>`,
		"fallback": "keyline-icons:volume-x-sharp-fill",
	});
}

export default Component;
