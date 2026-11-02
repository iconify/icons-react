import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba22pj4_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba22pj4_c"/>`,
		"fallback": "mingcute:italic-fill",
	});
}

export default Component;
