import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5qz3lb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5qz3lb2a"/>`,
		"fallback": "ri:landscape-ai-line",
	});
}

export default Component;
