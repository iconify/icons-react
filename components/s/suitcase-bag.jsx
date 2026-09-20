import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hgtd2mbaj.css';
import '../../css/a/afmiw_bvr.css';
import '../../css/z/z1fr16f_q.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="hgtd2mbaj"/><path class="afmiw_bvr"/><path class="z1fr16f_q"/></g>`,
		"fallback": "marketeq:suitcase-bag",
	});
}

export default Component;
