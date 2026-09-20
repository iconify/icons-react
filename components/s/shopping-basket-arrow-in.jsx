import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dgj_hqbie.css';
import '../../css/a/azsn61bmv.css';
import '../../css/f/f1yxoxqse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dgj_hqbie"/><path class="azsn61bmv"/><path class="f1yxoxqse"/></g>`,
		"fallback": "streamline-freehand:shopping-basket-arrow-in",
	});
}

export default Component;
