import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_-i89bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_-i89bqg"/>`,
		"fallback": "mingcute:save-fill",
	});
}

export default Component;
