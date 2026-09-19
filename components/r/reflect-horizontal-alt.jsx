import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na7l5acoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na7l5acoy"/>`,
		"fallback": "boxicons:reflect-horizontal-alt",
	});
}

export default Component;
