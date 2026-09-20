import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi1ootbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi1ootbzb"/>`,
		"fallback": "mingcute:paint-brush-ai-line",
	});
}

export default Component;
