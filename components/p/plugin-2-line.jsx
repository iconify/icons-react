import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mioi7ibnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mioi7ibnp"/>`,
		"fallback": "mingcute:plugin-2-line",
	});
}

export default Component;
