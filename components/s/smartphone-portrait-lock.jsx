import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke6k-nk_c.css';

const viewBox = {"width":304,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke6k-nk_c"/>`,
		"fallback": "zmdi:smartphone-portrait-lock",
	});
}

export default Component;
