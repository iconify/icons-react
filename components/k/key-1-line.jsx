import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekc2msb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekc2msb_l"/>`,
		"fallback": "mingcute:key-1-line",
	});
}

export default Component;
