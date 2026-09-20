import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuose96rb.css';
import '../../css/l/lvg9scrvt.css';
import '../../css/f/fxg96ccqq.css';
import '../../css/a/av0hegbib.css';
import '../../css/e/e8gi0_yqb.css';
import '../../css/p/p-vevgbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuose96rb"/><path class="lvg9scrvt"/><path class="fxg96ccqq"/><path class="av0hegbib"/><path class="e8gi0_yqb"/><path class="p-vevgbel"/></g>`,
		"fallback": "solar:scanner-bold-duotone",
	});
}

export default Component;
