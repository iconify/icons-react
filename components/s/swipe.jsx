import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rbi3_qe2t.css';
import '../../css/l/lcxm60n5d.css';
import '../../css/f/fsgiuuxfd.css';
import '../../css/j/j0q2igbtm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rbi3_qe2t"/><path class="lcxm60n5d"/><path class="fsgiuuxfd"/><path class="j0q2igbtm"/></g>`,
		"fallback": "icon-park:swipe",
	});
}

export default Component;
