import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/m/m4o192bds.css';
import '../../css/h/hm6a7abbr.css';
import '../../css/r/rh1n6jbub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="m4o192bds"/><path class="hm6a7abbr"/><path class="rh1n6jbub"/></g>`,
		"fallback": "icon-park-outline:start-time-sort",
	});
}

export default Component;
