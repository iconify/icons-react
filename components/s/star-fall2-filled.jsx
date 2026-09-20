import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gq04mtoqr.css';
import '../../css/b/bz8j3obfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gq04mtoqr"/><path class="bz8j3obfz"/></g>`,
		"fallback": "reicon:star-fall2-filled",
	});
}

export default Component;
