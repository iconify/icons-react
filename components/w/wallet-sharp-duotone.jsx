import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jyo03ebxt.css';
import '../../css/u/ufgz6n_fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jyo03ebxt"/><path class="ufgz6n_fm"/></g>`,
		"fallback": "keyline-icons:wallet-sharp-duotone",
	});
}

export default Component;
