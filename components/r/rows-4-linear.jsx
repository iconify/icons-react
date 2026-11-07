import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/weddopsmh.css';
import '../../css/l/l4trkhdsa.css';
import '../../css/w/ws8s-nbqi.css';
import '../../css/c/cex3mhxbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="weddopsmh"/><path class="l4trkhdsa"/><path class="ws8s-nbqi"/><path class="cex3mhxbq"/></g>`,
		"fallback": "solar:rows-4-linear",
	});
}

export default Component;
