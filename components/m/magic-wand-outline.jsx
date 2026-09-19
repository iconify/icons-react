import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pp2bsvjdy.css';
import '../../css/g/gibju-rth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="pp2bsvjdy"/><path class="gibju-rth"/></g>`,
		"fallback": "bitcoin-icons:magic-wand-outline",
	});
}

export default Component;
