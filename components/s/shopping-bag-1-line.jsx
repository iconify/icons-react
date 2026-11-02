import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh70a0b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh70a0b9d"/>`,
		"fallback": "mingcute:shopping-bag-1-line",
	});
}

export default Component;
