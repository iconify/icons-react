import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s2wp1ubcr.css';
import '../../css/i/iilbxu-wy.css';
import '../../css/l/lc1kdqbaj.css';
import '../../css/m/mosb5acyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s2wp1ubcr wm-shadow"/><path class="iilbxu-wy wm-shadow"/><path class="lc1kdqbaj"/><path class="mosb5acyc"/></g>`,
		"fallback": "withicons-brutal:luggage",
	});
}

export default Component;
