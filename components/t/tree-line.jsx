import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i--t4vbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i--t4vbcf"/>`,
		"fallback": "mingcute:tree-line",
	});
}

export default Component;
