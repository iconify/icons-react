import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7k-jac0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7k-jac0k"/>`,
		"fallback": "ri:movie-ai-line",
	});
}

export default Component;
