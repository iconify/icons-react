import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjxj3py5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjxj3py5m"/>`,
		"fallback": "selfhst:unbound-dark",
	});
}

export default Component;
