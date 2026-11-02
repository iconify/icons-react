import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9epyhx6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9epyhx6c"/>`,
		"fallback": "mingcute:unfold-vertical-line",
	});
}

export default Component;
