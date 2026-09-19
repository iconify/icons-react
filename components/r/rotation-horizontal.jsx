import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f94-qabgl.css';
import '../../css/u/uyirz0bfw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="f94-qabgl"/><path class="uyirz0bfw"/></g>`,
		"fallback": "icon-park:rotation-horizontal",
	});
}

export default Component;
