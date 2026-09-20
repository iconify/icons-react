import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_5d7pbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_5d7pbjr"/>`,
		"fallback": "mingcute:layout-7-line",
	});
}

export default Component;
