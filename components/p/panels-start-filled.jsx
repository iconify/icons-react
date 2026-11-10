import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg6t6cbrt.css';
import '../../css/t/t-po0jxhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qg6t6cbrt"/><path class="t-po0jxhx"/></g>`,
		"fallback": "andrsrxn:panels-start-filled",
	});
}

export default Component;
