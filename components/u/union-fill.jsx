import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcp55eb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dcp55eb3o"/>`,
		"fallback": "mingcute:union-fill",
	});
}

export default Component;
