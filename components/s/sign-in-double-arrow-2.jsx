import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/rq67u_p4t.css';
import '../../css/j/j167gwmkm.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="rq67u_p4t"/><path class="j167gwmkm"/></g>`,
		"fallback": "marketeq:sign-in-double-arrow-2",
	});
}

export default Component;
