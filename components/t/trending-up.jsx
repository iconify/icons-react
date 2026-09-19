import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y-cpy7b_s.css';
import '../../css/p/p6oj0qb7p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="y-cpy7b_s"/><path class="p6oj0qb7p"/></g>`,
		"fallback": "icon-park:trending-up",
	});
}

export default Component;
