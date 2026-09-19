import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/y/y5u96sb9x.css';
import '../../css/z/zjhnhpypo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path class="y5u96sb9x"/><path clip-rule="evenodd" class="zjhnhpypo"/></g>`,
		"fallback": "iconoir:keyframe-align-horizontal-solid",
	});
}

export default Component;
