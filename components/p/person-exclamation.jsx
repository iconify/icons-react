import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tua2uqbkb.css';
import '../../css/f/fc631pbzq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tua2uqbkb"/><path class="fc631pbzq"/></g>`,
		"fallback": "bi:person-exclamation",
	});
}

export default Component;
