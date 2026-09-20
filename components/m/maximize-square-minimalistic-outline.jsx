import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ksjxiodpt.css';
import '../../css/g/gughkpbfx.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ksjxiodpt"/><path class="gughkpbfx"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`,
		"fallback": "solar:maximize-square-minimalistic-outline",
	});
}

export default Component;
