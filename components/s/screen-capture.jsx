import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/v-362399u.css';
import '../../css/d/d8ui3b9nq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="v-362399u"/><path class="d8ui3b9nq"/></g>`,
		"fallback": "marketeq:screen-capture",
	});
}

export default Component;
