import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbexzmz6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbexzmz6j"/>`,
		"fallback": "mingcute:sale-fill",
	});
}

export default Component;
