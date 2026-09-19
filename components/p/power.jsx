import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j-8rs0syu.css';
import '../../css/k/ktk4-jb_u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="j-8rs0syu"/><path class="ktk4-jb_u"/></g>`,
		"fallback": "icon-park:power",
	});
}

export default Component;
