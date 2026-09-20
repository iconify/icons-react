import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6725hmas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6725hmas"/>`,
		"fallback": "mingcute:wallet-line",
	});
}

export default Component;
