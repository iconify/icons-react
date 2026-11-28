import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0b2hpblm.css';
import '../../css/r/rvn-al15t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c0b2hpblm secondary"/><path class="primary rvn-al15t"/></g>`,
		"fallback": "iconaut:projector-duotone",
	});
}

export default Component;
