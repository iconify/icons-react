import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/ninpm2l_d.css';
import '../../css/y/y_x5j132q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ninpm2l_d"/><path class="y_x5j132q"/></g>`,
		"fallback": "icon-park:right-small",
	});
}

export default Component;
