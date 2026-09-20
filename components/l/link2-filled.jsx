import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zog6ccwcb.css';
import '../../css/q/qhqf-lbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zog6ccwcb"/><path class="qhqf-lbod"/></g>`,
		"fallback": "reicon:link2-filled",
	});
}

export default Component;
