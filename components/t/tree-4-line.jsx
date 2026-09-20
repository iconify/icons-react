import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgklcob_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgklcob_s"/>`,
		"fallback": "mingcute:tree-4-line",
	});
}

export default Component;
