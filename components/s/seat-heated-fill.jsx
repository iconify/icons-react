import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_x8pkbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_x8pkbab"/>`,
		"fallback": "mingcute:seat-heated-fill",
	});
}

export default Component;
