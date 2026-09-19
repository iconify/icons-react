import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ir6kd69-z.css';
import '../../css/u/u_0h2wn2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ir6kd69-z"/><path class="u_0h2wn2t"/></g>`,
		"fallback": "hugeicons:skip-back",
	});
}

export default Component;
