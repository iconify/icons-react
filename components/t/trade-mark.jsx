import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxxtdubsv.css';
import '../../css/u/ufulvvb4t.css';
import '../../css/d/doeu73bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qxxtdubsv"/><path class="ufulvvb4t"/><path class="doeu73bqn"/></g>`,
		"fallback": "andrsrxn:trade-mark",
	});
}

export default Component;
