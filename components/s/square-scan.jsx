import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd5jgbxh.css';
import '../../css/q/qw9y2yb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd5jgbxh"/><path clip-rule="evenodd" class="qw9y2yb1m"/></g>`,
		"fallback": "andrsrxn:square-scan",
	});
}

export default Component;
