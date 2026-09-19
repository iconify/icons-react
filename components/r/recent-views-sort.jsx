import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f82_z8gvp.css';
import '../../css/e/eqii1hm4p.css';
import '../../css/w/w-d6ddz8t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f82_z8gvp"/><path class="eqii1hm4p"/><path class="w-d6ddz8t"/></g>`,
		"fallback": "icon-park-outline:recent-views-sort",
	});
}

export default Component;
