import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he2h3cb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he2h3cb7w"/>`,
		"fallback": "mingcute:selector-vertical-fill",
	});
}

export default Component;
