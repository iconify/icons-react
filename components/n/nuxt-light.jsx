import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w81f2y0yx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w81f2y0yx"/>`,
		"fallback": "selfhst:nuxt-light",
	});
}

export default Component;
