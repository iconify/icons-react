import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs2_t7lkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs2_t7lkb"/>`,
		"fallback": "mingcute:pen-ai-fill",
	});
}

export default Component;
