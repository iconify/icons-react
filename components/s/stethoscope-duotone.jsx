import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/me86ccc_a.css';
import '../../css/f/f4s_wibfo.css';
import '../../css/x/x-yo1fvtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="me86ccc_a"/><path class="f4s_wibfo"/><path class="x-yo1fvtj"/></g>`,
		"fallback": "reicon:stethoscope-duotone",
	});
}

export default Component;
