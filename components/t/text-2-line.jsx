import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mctny38gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mctny38gj"/>`,
		"fallback": "mingcute:text-2-line",
	});
}

export default Component;
