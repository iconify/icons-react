import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p34tvj1eg.css';
import '../../css/c/c6upwkbge.css';
import '../../css/u/u5618s-wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p34tvj1eg"/><path class="c6upwkbge"/><path class="u5618s-wt"/></g>`,
		"fallback": "keyline-icons:message-sparkles-sharp-duotone",
	});
}

export default Component;
