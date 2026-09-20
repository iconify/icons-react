import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i5x3p4a3w.css';
import '../../css/w/wwlkerb1t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="i5x3p4a3w"/><path class="wwlkerb1t"/></g>`,
		"fallback": "marketeq:up-down-arrow",
	});
}

export default Component;
