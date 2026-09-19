import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hmv_r4v_m.css';
import '../../css/f/fsijvccwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hmv_r4v_m"/><path class="fsijvccwk"/></g>`,
		"fallback": "hugeicons:share-07",
	});
}

export default Component;
