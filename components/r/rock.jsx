import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hk84_suzy.css';
import '../../css/k/ktbtm7bpy.css';
import '../../css/x/xc2kklq7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hk84_suzy"/><path class="ktbtm7bpy"/><path class="xc2kklq7i"/></g>`,
		"fallback": "icon-park:rock",
	});
}

export default Component;
