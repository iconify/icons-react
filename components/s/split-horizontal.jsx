import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_976wb5y.css';
import '../../css/b/bma1urbkj.css';
import '../../css/c/c1nfd-brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="x_976wb5y"/><rect class="bma1urbkj"/><path class="c1nfd-brr"/></g>`,
		"fallback": "andrsrxn:split-horizontal",
	});
}

export default Component;
