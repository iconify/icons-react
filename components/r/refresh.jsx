import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sp4r-xb2h.css';
import '../../css/z/zfczofb_k.css';
import '../../css/x/xxqnz9_tr.css';
import '../../css/q/qb5jn3b2s.css';
import '../../css/b/bzynzkb9r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sp4r-xb2h"/><path class="zfczofb_k"/><path class="xxqnz9_tr"/><path class="qb5jn3b2s"/><path class="bzynzkb9r"/></g>`,
		"fallback": "pepicons:refresh",
	});
}

export default Component;
