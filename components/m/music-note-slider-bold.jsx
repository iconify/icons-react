import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hu6to_bep.css';
import '../../css/r/ruu0kd3pu.css';
import '../../css/t/tlj01bb8r.css';
import '../../css/e/eic0jabeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hu6to_bep"/><path clip-rule="evenodd" class="ruu0kd3pu"/><path class="tlj01bb8r"/><path class="eic0jabeh"/></g>`,
		"fallback": "solar:music-note-slider-bold",
	});
}

export default Component;
