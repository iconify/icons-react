import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c4s-cubrd.css';
import '../../css/l/lsep90y1n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c4s-cubrd"/><path class="lsep90y1n"/></g>`,
		"fallback": "marketeq:stairs-3",
	});
}

export default Component;
