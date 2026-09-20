import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k33suh6om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k33suh6om"/>`,
		"fallback": "mingcute:shovel-fill",
	});
}

export default Component;
