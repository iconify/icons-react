import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kih7mtb9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kih7mtb9s"/>`,
		"fallback": "cil:smoke-free",
	});
}

export default Component;
