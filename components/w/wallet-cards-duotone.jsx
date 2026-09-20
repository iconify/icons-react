import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xlcsfqbrl.css';
import '../../css/u/u_e6txb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xlcsfqbrl"/><path clip-rule="evenodd" class="u_e6txb7i"/></g>`,
		"fallback": "keyline-icons:wallet-cards-duotone",
	});
}

export default Component;
