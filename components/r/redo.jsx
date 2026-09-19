import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd50cvy7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd50cvy7q"/>`,
		"fallback": "codex:redo",
	});
}

export default Component;
