import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kue253bke.css';
import '../../css/e/exq3z-biz.css';
import '../../css/f/fmws5xbuc.css';
import '../../css/x/x0bcp-bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kue253bke"/><path class="exq3z-biz"/><path class="fmws5xbuc"/><path class="x0bcp-bgs"/></g>`,
		"fallback": "andrsrxn:mountains",
	});
}

export default Component;
