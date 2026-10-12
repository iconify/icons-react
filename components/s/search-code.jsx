import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfrp43itr.css';
import '../../css/q/qfcjnfb1u.css';
import '../../css/e/e60p4paox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yfrp43itr"/><path class="qfcjnfb1u"/><path class="e60p4paox"/></g>`,
		"fallback": "andrsrxn:search-code",
	});
}

export default Component;
