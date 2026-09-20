import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slwza1cau.css';
import '../../css/r/rmsysp_wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="slwza1cau"/><path class="rmsysp_wy"/></g>`,
		"fallback": "reicon:playlist3-duotone",
	});
}

export default Component;
