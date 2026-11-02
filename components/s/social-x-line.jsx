import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct1q-zx5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct1q-zx5p"/>`,
		"fallback": "mingcute:social-x-line",
	});
}

export default Component;
