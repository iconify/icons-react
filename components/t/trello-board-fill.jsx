import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2khy7b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2khy7b0q"/>`,
		"fallback": "mingcute:trello-board-fill",
	});
}

export default Component;
