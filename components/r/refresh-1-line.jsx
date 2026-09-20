import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl3nf4b0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl3nf4b0e"/>`,
		"fallback": "mingcute:refresh-1-line",
	});
}

export default Component;
