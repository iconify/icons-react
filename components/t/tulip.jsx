import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_p5cq_2x.css';
import '../../css/j/jyb22ccqr.css';
import '../../css/s/szjh0obrc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_p5cq_2x"/><path class="jyb22ccqr"/><path class="szjh0obrc"/></g>`,
		"fallback": "fluent-emoji-flat:tulip",
	});
}

export default Component;
