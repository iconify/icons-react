import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fens4lu3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fens4lu3m"/>`,
		"fallback": "noviair-light:line-chart-arrow-down",
	});
}

export default Component;
