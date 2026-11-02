import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq4ba_b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq4ba_b5b"/>`,
		"fallback": "mingcute:tv-2-fill",
	});
}

export default Component;
