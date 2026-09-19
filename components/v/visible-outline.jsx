import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/crcu86iyq.css';
import '../../css/d/dcgw77bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><ellipse class="crcu86iyq"/><circle class="dcgw77bis"/></g>`,
		"fallback": "bitcoin-icons:visible-outline",
	});
}

export default Component;
