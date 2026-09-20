import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd6bosi-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nd6bosi-b"/>`,
		"fallback": "solar:square-alt-arrow-right-bold",
	});
}

export default Component;
