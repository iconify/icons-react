import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6iwfab2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6iwfab2l"/>`,
		"fallback": "mingcute:translate-2-ai-line",
	});
}

export default Component;
