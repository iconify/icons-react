import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxcjcba9u.css';
import '../../css/z/zz3qp5rxw.css';
import '../../css/r/rj7t9acar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxcjcba9u"/><path class="zz3qp5rxw"/><path class="rj7t9acar"/></g>`,
		"fallback": "andrsrxn:sock",
	});
}

export default Component;
