import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1fv7cbto.css';
import '../../css/k/kd2cqsb_l.css';
import '../../css/s/spe8wybxg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i1fv7cbto"/><path clip-rule="evenodd" class="kd2cqsb_l"/><path clip-rule="evenodd" class="spe8wybxg"/></g>`,
		"fallback": "pepicons-print:photo-camera",
	});
}

export default Component;
