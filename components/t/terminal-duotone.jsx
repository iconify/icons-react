import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mpz08ob7i.css';
import '../../css/b/by60bw4ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mpz08ob7i secondary"/><path class="by60bw4ua primary"/></g>`,
		"fallback": "iconaut:terminal-duotone",
	});
}

export default Component;
