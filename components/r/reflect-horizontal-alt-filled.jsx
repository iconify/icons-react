import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya80we8aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya80we8aj"/>`,
		"fallback": "boxicons:reflect-horizontal-alt-filled",
	});
}

export default Component;
