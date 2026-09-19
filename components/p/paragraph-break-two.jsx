import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uz6ay7bdz.css';
import '../../css/k/kqsxotboh.css';
import '../../css/x/xafv2hbwi.css';
import '../../css/i/inncdbcjd.css';
import '../../css/r/r9px-6bfr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="uz6ay7bdz"/><path class="kqsxotboh"/><path class="xafv2hbwi"/><path class="inncdbcjd"/><path class="r9px-6bfr"/></g>`,
		"fallback": "icon-park:paragraph-break-two",
	});
}

export default Component;
