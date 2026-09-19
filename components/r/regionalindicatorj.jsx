import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_n-2ib6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_n-2ib6j"/>`,
		"fallback": "fxemoji:regionalindicatorj",
	});
}

export default Component;
