import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dta8wy3ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dta8wy3ag"/>`,
		"fallback": "mingcute:square-arrow-up-line",
	});
}

export default Component;
