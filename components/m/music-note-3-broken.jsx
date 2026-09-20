import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qpgyrzr1h.css';
import '../../css/v/viuxy1b9m.css';
import '../../css/i/i1v0xqbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qpgyrzr1h"/><path class="viuxy1b9m"/><path class="i1v0xqbor"/></g>`,
		"fallback": "solar:music-note-3-broken",
	});
}

export default Component;
