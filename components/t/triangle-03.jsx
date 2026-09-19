import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jqpjq9b1t.css';
import '../../css/l/l5k9v0pct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jqpjq9b1t"/><ellipse class="l5k9v0pct"/></g>`,
		"fallback": "hugeicons:triangle-03",
	});
}

export default Component;
