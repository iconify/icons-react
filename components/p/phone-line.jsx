import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kti8z0b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kti8z0b1r"/>`,
		"fallback": "mingcute:phone-line",
	});
}

export default Component;
