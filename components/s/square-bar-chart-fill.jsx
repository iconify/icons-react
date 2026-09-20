import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu6ww8f0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fu6ww8f0f"/>`,
		"fallback": "keyline-icons:square-bar-chart-fill",
	});
}

export default Component;
