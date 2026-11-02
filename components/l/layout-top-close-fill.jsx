import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c58r33bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c58r33bla"/>`,
		"fallback": "mingcute:layout-top-close-fill",
	});
}

export default Component;
