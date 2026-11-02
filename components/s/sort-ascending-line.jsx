import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khi8ekbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khi8ekbup"/>`,
		"fallback": "mingcute:sort-ascending-line",
	});
}

export default Component;
