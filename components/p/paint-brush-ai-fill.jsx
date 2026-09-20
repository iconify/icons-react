import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjr6b_b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cjr6b_b9q"/>`,
		"fallback": "mingcute:paint-brush-ai-fill",
	});
}

export default Component;
