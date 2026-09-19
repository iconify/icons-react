import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/umiv7jggm.css';
import '../../css/o/o2zkt_b5k.css';
import '../../css/r/rbfb3qb0e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="umiv7jggm"/><path class="o2zkt_b5k"/><path class="rbfb3qb0e"/></g>`,
		"fallback": "icon-park:ripple",
	});
}

export default Component;
