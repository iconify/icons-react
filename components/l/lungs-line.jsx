import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpay0fb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpay0fb5x"/>`,
		"fallback": "mingcute:lungs-line",
	});
}

export default Component;
