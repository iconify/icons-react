import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aqce0abzy.css';
import '../../css/u/uc71xy3ii.css';
import '../../css/t/td0om22as.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="aqce0abzy"/><circle class="uc71xy3ii"/><path class="td0om22as"/></g>`,
		"fallback": "garden:user-group-stroke-12",
	});
}

export default Component;
