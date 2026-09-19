import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rdg8_zbcm.css';
import '../../css/j/j6jh8xbwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rdg8_zbcm"/><path class="j6jh8xbwl"/></g>`,
		"fallback": "icon-park:landing",
	});
}

export default Component;
