import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ropt4jr0p.css';
import '../../css/y/ygxy_c58d.css';
import '../../css/b/byu0ligoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ropt4jr0p"/><path class="ygxy_c58d"/><path class="byu0ligoo"/></g>`,
		"fallback": "hugeicons:subnode-add",
	});
}

export default Component;
