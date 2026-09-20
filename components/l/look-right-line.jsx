import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3vyvrbyw.css';
import '../../css/e/el2jujohs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3vyvrbyw"/><path class="el2jujohs"/>`,
		"fallback": "mingcute:look-right-line",
	});
}

export default Component;
