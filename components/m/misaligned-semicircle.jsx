import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yo5z61b0s.css';
import '../../css/j/j6dr_wk-z.css';
import '../../css/r/r6m4m4-ha.css';
import '../../css/l/l4ahcjbzk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="yo5z61b0s"/><path class="j6dr_wk-z"/><path class="r6m4m4-ha"/><path class="l4ahcjbzk"/></g>`,
		"fallback": "icon-park:misaligned-semicircle",
	});
}

export default Component;
