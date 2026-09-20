import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fsf0arb9t.css';
import '../../css/f/fjf7bob9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fsf0arb9t"/><path class="fjf7bob9l"/></g>`,
		"fallback": "solar:round-transfer-diagonal-broken",
	});
}

export default Component;
