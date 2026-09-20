import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l94-5x15h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l94-5x15h"/>`,
		"fallback": "selfhst:pico",
	});
}

export default Component;
