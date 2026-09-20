import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ezl73fbik.css';
import '../../css/u/uzsfyvbpo.css';
import '../../css/v/vq-hpzb2x.css';
import '../../css/o/oaxy24_qm.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ezl73fbik"/><path class="uzsfyvbpo"/><path class="vq-hpzb2x"/><path class="oaxy24_qm"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`,
		"fallback": "solar:maximize-square-2-outline",
	});
}

export default Component;
