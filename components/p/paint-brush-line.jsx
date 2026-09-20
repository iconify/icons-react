import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drw4f59_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drw4f59_q"/>`,
		"fallback": "mingcute:paint-brush-line",
	});
}

export default Component;
