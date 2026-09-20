import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f5q0570dj.css';
import '../../css/f/fex2wqf0z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="f5q0570dj"/><path class="fex2wqf0z"/></g>`,
		"fallback": "marketeq:menu-alt",
	});
}

export default Component;
