import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd64vy-7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd64vy-7f"/>`,
		"fallback": "mingcute:share-3-line",
	});
}

export default Component;
