import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwi9pu5rq.css';
import '../../css/j/jd3ogzb0d.css';
import '../../css/n/nz1mdnb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gwi9pu5rq"/><path class="jd3ogzb0d"/><path class="nz1mdnb4y"/></g>`,
		"fallback": "andrsrxn:send-to-back",
	});
}

export default Component;
