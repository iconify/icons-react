import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9x33ufkc.css';
import '../../css/h/h1xsle27q.css';
import '../../css/i/icpdbcovf.css';
import '../../css/c/c20o-zb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w9x33ufkc"/><path class="h1xsle27q"/><path class="icpdbcovf"/><path class="c20o-zb-c"/></g>`,
		"fallback": "andrsrxn:refresh-sparkle",
	});
}

export default Component;
