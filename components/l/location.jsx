import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pvhndmjid.css';
import '../../css/c/c9-jnbc3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pvhndmjid"/><path class="c9-jnbc3p"/></g>`,
		"fallback": "humbleicons:location",
	});
}

export default Component;
