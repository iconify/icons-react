import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/b08in11er.css';
import '../../css/f/fywbebbso.css';
import '../../css/u/uptdqswhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="b08in11er"/><path class="fywbebbso"/><path class="uptdqswhc"/></g>`,
		"fallback": "icon-park:multi-circular",
	});
}

export default Component;
