import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/k60_42bvb.css';
import '../../css/e/epwsljzvl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="k60_42bvb"/><path class="epwsljzvl"/></g>`,
		"fallback": "icon-park-outline:parallel-gateway",
	});
}

export default Component;
