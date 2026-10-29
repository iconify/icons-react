import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jfd2ogbga.css';
import '../../css/d/d0l02ib-x.css';
import '../../css/q/qia54zbrp.css';
import '../../css/k/k09kzac_t.css';
import '../../css/g/g49h-5lyb.css';
import '../../css/h/htloyjbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jfd2ogbga wm-shadow"/><path class="d0l02ib-x"/><path class="qia54zbrp"/><path class="k09kzac_t"/><path class="g49h-5lyb wm-shine"/><path class="htloyjbpv wm-deco"/></g>`,
		"fallback": "withicons-sticker:maximize-2",
	});
}

export default Component;
