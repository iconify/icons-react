import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b2sa5eobi.css';
import '../../css/t/tic72tbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b2sa5eobi"/><path class="tic72tbly"/></g>`,
		"fallback": "hugeicons:sort-by-down-01",
	});
}

export default Component;
