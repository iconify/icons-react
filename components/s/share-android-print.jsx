import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqp_fpfgv.css';
import '../../css/h/hku-2nb6r.css';
import '../../css/n/ne9k0gz5r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rqp_fpfgv"/><path clip-rule="evenodd" class="hku-2nb6r"/><path class="ne9k0gz5r"/></g>`,
		"fallback": "pepicons:share-android-print",
	});
}

export default Component;
