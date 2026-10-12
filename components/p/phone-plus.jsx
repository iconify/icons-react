import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/al339szkh.css';
import '../../css/q/qjey0nbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="al339szkh"/><path class="qjey0nbqs"/></g>`,
		"fallback": "andrsrxn:phone-plus",
	});
}

export default Component;
