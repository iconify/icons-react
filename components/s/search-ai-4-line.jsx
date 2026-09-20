import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru3w11duv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru3w11duv"/>`,
		"fallback": "ri:search-ai-4-line",
	});
}

export default Component;
