import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye2q6yned.css';
import '../../css/y/y3y32vqck.css';
import '../../css/j/jie8j7bdw.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/r/rq_n8rb9b.css';
import '../../css/k/k1ra0vbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ye2q6yned"/><path class="y3y32vqck"/><path class="jie8j7bdw"/><g class="p_3zmsvya"><path class="rq_n8rb9b"/><path class="k1ra0vbyl"/></g></g>`,
		"fallback": "tdesign:pantone",
	});
}

export default Component;
