import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm344n_sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wm344n_sz"/>`,
		"fallback": "mingcute:openai-fill",
	});
}

export default Component;
