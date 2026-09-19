import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p-x09lu6p.css';
import '../../css/c/cql6yxz1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="p-x09lu6p"/><path class="cql6yxz1w"/></g>`,
		"fallback": "icon-park:invert-left",
	});
}

export default Component;
