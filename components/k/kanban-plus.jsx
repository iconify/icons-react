import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcvw__bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcvw__bgm"/>`,
		"fallback": "noviair:kanban-plus",
	});
}

export default Component;
