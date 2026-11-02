import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cilo2uhhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cilo2uhhy"/>`,
		"fallback": "mingcute:letter-spacing-fill",
	});
}

export default Component;
