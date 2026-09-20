import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym5qnl2lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym5qnl2lw"/>`,
		"fallback": "mingcute:web-fill",
	});
}

export default Component;
