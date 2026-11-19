import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryg87h1ur.css';
import '../../css/n/nb7y-8zjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ryg87h1ur"/><path class="nb7y-8zjw"/></g>`,
		"fallback": "andrsrxn:stroke-end-point-round",
	});
}

export default Component;
