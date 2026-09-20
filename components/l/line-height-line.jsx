import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b66489byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b66489byg"/>`,
		"fallback": "mingcute:line-height-line",
	});
}

export default Component;
