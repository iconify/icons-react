import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no7_26bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no7_26bbq"/>`,
		"fallback": "mingcute:teacup-fill",
	});
}

export default Component;
