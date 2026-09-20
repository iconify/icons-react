import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j84o_8b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j84o_8b_n"/>`,
		"fallback": "mingcute:trello-board-fill",
	});
}

export default Component;
