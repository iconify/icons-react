import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/efimv0hnc.css';
import '../../css/w/wcaaicc5u.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="efimv0hnc"/><path class="wcaaicc5u"/></g>`,
		"fallback": "marketeq:right-sign",
	});
}

export default Component;
