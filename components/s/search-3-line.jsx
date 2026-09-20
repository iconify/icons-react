import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umi8k7ujp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umi8k7ujp"/>`,
		"fallback": "mingcute:search-3-line",
	});
}

export default Component;
