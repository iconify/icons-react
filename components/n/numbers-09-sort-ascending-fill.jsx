import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck12p5bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck12p5bii"/>`,
		"fallback": "mingcute:numbers-09-sort-ascending-fill",
	});
}

export default Component;
