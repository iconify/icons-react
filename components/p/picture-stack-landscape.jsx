import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqns1xbrx.css';
import '../../css/j/jg2gjvb1x.css';
import '../../css/h/h_f3nkuky.css';
import '../../css/b/b2bbneoco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yqns1xbrx"/><path class="jg2gjvb1x"/><path class="h_f3nkuky"/><path class="b2bbneoco"/></g>`,
		"fallback": "streamline-freehand-color:picture-stack-landscape",
	});
}

export default Component;
