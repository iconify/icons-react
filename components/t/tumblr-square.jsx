import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-296b9zl.css';
import '../../css/u/u0j55db0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-296b9zl"/><path class="u0j55db0u"/>`,
		"fallback": "uim:tumblr-square",
	});
}

export default Component;
