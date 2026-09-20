import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clz8sab3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="clz8sab3x"/>`,
		"fallback": "solar:smartphone-2-bold",
	});
}

export default Component;
