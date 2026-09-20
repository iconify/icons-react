import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0a2-vbzo.css';
import '../../css/c/c9bbww2xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0a2-vbzo"/><path class="c9bbww2xk"/>`,
		"fallback": "mage:server-2-fill",
	});
}

export default Component;
