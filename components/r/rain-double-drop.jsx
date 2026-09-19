import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/ww_z5ccnr.css';
import '../../css/q/qoibz8b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ww_z5ccnr"/><path class="qoibz8b6h"/></g>`,
		"fallback": "hugeicons:rain-double-drop",
	});
}

export default Component;
