import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3a0q5wsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3a0q5wsx"/>`,
		"fallback": "mingcute:shield-fill",
	});
}

export default Component;
