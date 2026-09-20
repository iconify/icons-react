import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nc54n254z.css';
import '../../css/g/gw-q8x31y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nc54n254z"/><path class="gw-q8x31y"/></g>`,
		"fallback": "reicon:podcast-duotone",
	});
}

export default Component;
