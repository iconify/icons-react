import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aqo_2k_tl.css';
import '../../css/x/xii1w2bek.css';
import '../../css/h/he97x-jqd.css';
import '../../css/e/en969cb9g.css';
import '../../css/n/nrvqvld_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="aqo_2k_tl wm-shadow"/><path class="wm-shadow xii1w2bek"/><path class="he97x-jqd"/><path class="en969cb9g"/><path class="nrvqvld_y"/></g>`,
		"fallback": "withicons-brutal:pill-bottle",
	});
}

export default Component;
