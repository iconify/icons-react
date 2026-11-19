import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_491rb2q.css';
import '../../css/l/ls18cxiqd.css';
import '../../css/z/zknz5ccbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_491rb2q"/><path class="ls18cxiqd"/><path class="zknz5ccbc"/></g>`,
		"fallback": "andrsrxn:kidneys",
	});
}

export default Component;
