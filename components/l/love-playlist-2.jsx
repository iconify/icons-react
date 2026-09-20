import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/w1lu_ab7x.css';
import '../../css/x/xas6sta9n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="w1lu_ab7x"/><path class="xas6sta9n"/></g>`,
		"fallback": "marketeq:love-playlist-2",
	});
}

export default Component;
