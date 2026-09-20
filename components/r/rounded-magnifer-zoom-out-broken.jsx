import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yfn9xdb5n.css';
import '../../css/j/jjar52fez.css';
import '../../css/x/x09loybdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yfn9xdb5n"/><path class="jjar52fez"/><path class="x09loybdy"/></g>`,
		"fallback": "solar:rounded-magnifer-zoom-out-broken",
	});
}

export default Component;
