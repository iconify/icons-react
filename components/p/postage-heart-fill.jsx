import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szgyekbec.css';
import '../../css/w/wjd4glhxz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="szgyekbec"/><path class="wjd4glhxz"/></g>`,
		"fallback": "bi:postage-heart-fill",
	});
}

export default Component;
