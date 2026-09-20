import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmsrgab1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmsrgab1o"/>`,
		"fallback": "mingcute:linear-fill",
	});
}

export default Component;
