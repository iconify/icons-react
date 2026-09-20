import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/cwqjm44fp.css';
import '../../css/y/ycykn3dsh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="cwqjm44fp"/><path class="ycykn3dsh"/></g>`,
		"fallback": "streamline-plump:pathfinder-outline",
	});
}

export default Component;
