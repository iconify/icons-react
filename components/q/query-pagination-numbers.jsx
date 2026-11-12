import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_xescbfb.css';
import '../../css/a/a3h_uub7j.css';
import '../../css/n/nnb345baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j_xescbfb"/><path class="a3h_uub7j"/><path class="nnb345baj"/></g>`,
		"fallback": "wordpress:query-pagination-numbers",
	});
}

export default Component;
