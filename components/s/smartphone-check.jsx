import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs6me8b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs6me8b2a"/>`,
		"fallback": "noviair-light:smartphone-check",
	});
}

export default Component;
