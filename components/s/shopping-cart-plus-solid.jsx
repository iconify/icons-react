import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nmo2-ho6t.css';
import '../../css/f/fd45p8brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nmo2-ho6t"/><path class="fd45p8brd wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-plus-solid",
	});
}

export default Component;
