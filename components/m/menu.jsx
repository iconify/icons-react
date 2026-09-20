import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f5q0570dj.css';
import '../../css/z/z6fknxb_q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="f5q0570dj"/><path class="z6fknxb_q"/></g>`,
		"fallback": "marketeq:menu",
	});
}

export default Component;
