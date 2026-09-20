import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmit9yp1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmit9yp1o"/>`,
		"fallback": "solar:smartphone-rotate-orientation-outline",
	});
}

export default Component;
