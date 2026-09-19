import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xsnu5obcl.css';
import '../../css/t/tzgk9_bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xsnu5obcl"/><path class="tzgk9_bkk"/></g>`,
		"fallback": "hugeicons:popcorn",
	});
}

export default Component;
