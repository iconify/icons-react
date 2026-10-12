import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffhll8bfm.css';
import '../../css/y/yxph1hbqe.css';
import '../../css/l/lv9kttbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 10.46 6.94)" class="ffhll8bfm"/><rect transform="matrix(0 -1 -1 0 18.74 22.3)" class="ffhll8bfm"/><rect transform="matrix(0 -1 -1 0 10.46 6.94)" class="yxph1hbqe"/><rect transform="matrix(0 -1 -1 0 18.74 22.3)" class="yxph1hbqe"/><path class="lv9kttbol"/></g>`,
		"fallback": "andrsrxn:tree-view-plus",
	});
}

export default Component;
