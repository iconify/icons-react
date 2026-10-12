import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cagm6sirf.css';
import '../../css/p/plzbufbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="cagm6sirf"/><path class="plzbufbhu"/></g>`,
		"fallback": "andrsrxn:screen-share-x",
	});
}

export default Component;
