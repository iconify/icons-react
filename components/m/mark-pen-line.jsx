import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u83m0ab_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u83m0ab_p"/>`,
		"fallback": "mingcute:mark-pen-line",
	});
}

export default Component;
