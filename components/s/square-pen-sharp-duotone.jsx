import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fpwl1qbal.css';
import '../../css/d/db-zerbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fpwl1qbal"/><path class="db-zerbsw"/></g>`,
		"fallback": "keyline-icons:square-pen-sharp-duotone",
	});
}

export default Component;
