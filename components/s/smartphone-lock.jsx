import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekn05fbpx.css';

const viewBox = {"width":368,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekn05fbpx"/>`,
		"fallback": "zmdi:smartphone-lock",
	});
}

export default Component;
