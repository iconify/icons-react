import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j9xou-p3f.css';
import '../../css/x/x3hcu31em.css';
import '../../css/z/zcb8pub_i.css';
import '../../css/p/paaftfbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j9xou-p3f"/><path class="x3hcu31em"/><path class="zcb8pub_i"/><path class="paaftfbeg"/></g>`,
		"fallback": "solar:point-on-map-perspective-bold",
	});
}

export default Component;
