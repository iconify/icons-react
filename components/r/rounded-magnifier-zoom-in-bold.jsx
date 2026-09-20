import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fnsxu5bca.css';
import '../../css/p/pnw6itfcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fnsxu5bca"/><path clip-rule="evenodd" class="pnw6itfcl"/></g>`,
		"fallback": "solar:rounded-magnifier-zoom-in-bold",
	});
}

export default Component;
