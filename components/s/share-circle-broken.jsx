import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p3-348ccq.css';
import '../../css/g/gszbesbvo.css';
import '../../css/j/jvpt20bzs.css';
import '../../css/x/xtsqy_b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p3-348ccq"/><path class="gszbesbvo"/><path class="jvpt20bzs"/><path class="xtsqy_b-v"/></g>`,
		"fallback": "solar:share-circle-broken",
	});
}

export default Component;
