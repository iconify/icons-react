import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xrfe-x01q.css';
import '../../css/q/qixrf4bqr.css';
import '../../css/z/z6th1jbgo.css';
import '../../css/y/yuzlqr0ra.css';
import '../../css/e/e8jpe6b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xrfe-x01q"/><path class="qixrf4bqr"/><path class="z6th1jbgo"/><path class="yuzlqr0ra"/><path class="e8jpe6b_h"/></g>`,
		"fallback": "grommet-icons:tiktok",
	});
}

export default Component;
