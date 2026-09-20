import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfg-kmbob.css';
import '../../css/e/e3z0bnbgy.css';
import '../../css/l/lsi0rnb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tfg-kmbob"/><path class="e3z0bnbgy"/><path clip-rule="evenodd" class="lsi0rnb3o"/></g>`,
		"fallback": "solar:medal-ribbons-star-bold",
	});
}

export default Component;
