import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gicwe6q8a.css';
import '../../css/i/i693_jxsz.css';
import '../../css/u/u2xuahb0j.css';
import '../../css/n/n2op0ubpx.css';
import '../../css/q/qvwj_u7kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gicwe6q8a wm-shadow"/><path class="i693_jxsz wm-shadow"/><path class="u2xuahb0j"/><path class="n2op0ubpx"/><path class="qvwj_u7kv"/></g>`,
		"fallback": "withicons-brutal:passport",
	});
}

export default Component;
