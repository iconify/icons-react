import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0fuy9b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0fuy9b5m"/>`,
		"fallback": "mingcute:layout-6-line",
	});
}

export default Component;
