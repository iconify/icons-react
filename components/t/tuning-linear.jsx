import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y0arut6ax.css';
import '../../css/e/e66wveb3k.css';
import '../../css/x/xufhgmt5t.css';
import '../../css/r/rvqvracaz.css';
import '../../css/j/jpqbvacrj.css';
import '../../css/j/jzslsxgqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y0arut6ax"/><path class="e66wveb3k"/><path class="xufhgmt5t"/><path class="rvqvracaz"/><path class="jpqbvacrj"/><path class="jzslsxgqb"/></g>`,
		"fallback": "solar:tuning-linear",
	});
}

export default Component;
