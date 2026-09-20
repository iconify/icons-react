import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d15wwo3kx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d15wwo3kx"/>`,
		"fallback": "selfhst:openbooks",
	});
}

export default Component;
