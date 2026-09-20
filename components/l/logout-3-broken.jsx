import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vgynvrhex.css';
import '../../css/l/l34jdmbes.css';
import '../../css/j/jsl6qobau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vgynvrhex"/><path class="l34jdmbes"/><path class="jsl6qobau"/></g>`,
		"fallback": "solar:logout-3-broken",
	});
}

export default Component;
