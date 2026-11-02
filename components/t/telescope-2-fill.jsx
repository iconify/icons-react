import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex_0f5bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex_0f5bsa"/>`,
		"fallback": "mingcute:telescope-2-fill",
	});
}

export default Component;
