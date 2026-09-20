import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9m7mj39d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9m7mj39d"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-up",
	});
}

export default Component;
