import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-fiq5b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-fiq5b8b"/>`,
		"fallback": "mingcute:safari-fill",
	});
}

export default Component;
