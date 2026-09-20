import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t41j2z3wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t41j2z3wf"/>`,
		"fallback": "mingcute:moon-cloudy-line",
	});
}

export default Component;
