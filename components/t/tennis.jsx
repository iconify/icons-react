import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b08in11er.css';
import '../../css/q/qqcqq7bdz.css';
import '../../css/b/bruezzpfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b08in11er"/><path class="qqcqq7bdz"/><path class="bruezzpfz"/></g>`,
		"fallback": "icon-park:tennis",
	});
}

export default Component;
