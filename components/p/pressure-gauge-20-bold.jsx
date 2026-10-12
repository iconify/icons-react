import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7slukbjf.css';
import '../../css/h/hyz9tubor.css';
import '../../css/y/yu8ceqbjs.css';
import '../../css/q/q425r9b_q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7slukbjf"/><path class="hyz9tubor"/><path class="yu8ceqbjs"/><path class="q425r9b_q"/>`,
		"fallback": "energy-icons:pressure-gauge-20-bold",
	});
}

export default Component;
