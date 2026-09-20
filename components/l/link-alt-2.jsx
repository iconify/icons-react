import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/inp2-nbrh.css';
import '../../css/h/h2w1bxiaf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="inp2-nbrh"/><path class="h2w1bxiaf"/></g>`,
		"fallback": "marketeq:link-alt-2",
	});
}

export default Component;
