import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i1twmrkez.css';
import '../../css/q/q9c1qpbly.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="i1twmrkez"/><path class="q9c1qpbly"/></g>`,
		"fallback": "marketeq:trowel-3",
	});
}

export default Component;
