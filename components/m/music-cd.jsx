import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b08in11er.css';
import '../../css/z/zq9ep78uu.css';
import '../../css/i/im0mfzb0p.css';
import '../../css/j/jgfok7b9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b08in11er"/><path class="zq9ep78uu"/><path class="im0mfzb0p"/><path class="jgfok7b9j"/></g>`,
		"fallback": "icon-park:music-cd",
	});
}

export default Component;
