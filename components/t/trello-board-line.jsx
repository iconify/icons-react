import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3a39im_l.css';
import '../../css/t/tp_oyib9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3a39im_l"/><path class="tp_oyib9q"/>`,
		"fallback": "mingcute:trello-board-line",
	});
}

export default Component;
