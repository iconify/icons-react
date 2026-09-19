import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hbu191xru.css';
import '../../css/d/de_jnj1nk.css';
import '../../css/x/xlvsdp5ws.css';
import '../../css/q/q2en493ek.css';
import '../../css/e/eembw2ujo.css';
import '../../css/v/v2aim8bmg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="hbu191xru"/><path class="de_jnj1nk"/><path class="xlvsdp5ws"/><path class="q2en493ek"/><path class="eembw2ujo"/><path class="v2aim8bmg"/></g>`,
		"fallback": "pepicons:refresh-print",
	});
}

export default Component;
