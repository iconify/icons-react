import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uyt_djohm.css';
import '../../css/v/v1r4qxbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uyt_djohm"/><path class="v1r4qxbxm"/></g>`,
		"fallback": "hugeicons:layout-3-column",
	});
}

export default Component;
