import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt3x90b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt3x90b7u"/>`,
		"fallback": "mingcute:snowstorm-line",
	});
}

export default Component;
