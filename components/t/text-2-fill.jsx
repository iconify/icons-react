import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qds8d4bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qds8d4bih"/>`,
		"fallback": "mingcute:text-2-fill",
	});
}

export default Component;
