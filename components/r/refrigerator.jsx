import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gicwe6q8a.css';
import '../../css/i/i693_jxsz.css';
import '../../css/t/t46u6_y3c.css';
import '../../css/c/cpy9cf_xf.css';
import '../../css/c/ccfdzwb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gicwe6q8a wm-shadow"/><path class="i693_jxsz wm-shadow"/><path class="t46u6_y3c"/><path class="cpy9cf_xf"/><path class="ccfdzwb1f"/></g>`,
		"fallback": "withicons-brutal:refrigerator",
	});
}

export default Component;
