import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b7o0occka.css';
import '../../css/p/pqmzp41vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b7o0occka"/><path class="pqmzp41vs"/></g>`,
		"fallback": "keyline-icons:tablet-vertical-duotone",
	});
}

export default Component;
