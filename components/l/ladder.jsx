import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn6doab_j.css';
import '../../css/w/wt-ad2b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xn6doab_j"/><path class="wt-ad2b7g"/></g>`,
		"fallback": "andrsrxn:ladder",
	});
}

export default Component;
