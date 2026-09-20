import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yujofnbqf.css';
import '../../css/x/xahojdbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yujofnbqf"/><path class="xahojdbxt"/></g>`,
		"fallback": "proicons:shape-intersect",
	});
}

export default Component;
