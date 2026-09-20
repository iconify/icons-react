import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3-qgwb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q3-qgwb7i"/>`,
		"fallback": "solar:smartphone-rotate-2-outline",
	});
}

export default Component;
