import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rz61hplvb.css';
import '../../css/b/bmknc5bwv.css';
import '../../css/m/mpuuhxylu.css';
import '../../css/h/h_tskvb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rz61hplvb"/><path clip-rule="evenodd" class="bmknc5bwv"/><path class="mpuuhxylu"/><path class="h_tskvb-r"/></g>`,
		"fallback": "solar:translation-2-bold",
	});
}

export default Component;
