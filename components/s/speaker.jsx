import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aq2r64hvn.css';
import '../../css/p/pk0tvervw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aq2r64hvn"/><path class="pk0tvervw"/></g>`,
		"fallback": "hugeicons:speaker",
	});
}

export default Component;
