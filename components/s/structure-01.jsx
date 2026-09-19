import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/ww0lhqbty.css';
import '../../css/x/x2ixbdcjp.css';
import '../../css/n/nhg-vsbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ww0lhqbty"/><path class="x2ixbdcjp"/><path class="nhg-vsbts"/></g>`,
		"fallback": "hugeicons:structure-01",
	});
}

export default Component;
