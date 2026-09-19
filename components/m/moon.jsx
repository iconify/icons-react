import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q37yxyb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q37yxyb0q"/>`,
		"fallback": "bxs:moon",
	});
}

export default Component;
