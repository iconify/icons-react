import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdr6qgb4m.css';
import '../../css/j/jdpsdzbyn.css';
import '../../css/m/m4yc2zbdc.css';
import '../../css/k/k4cg9fk4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdr6qgb4m"/><path class="jdpsdzbyn"/><path class="m4yc2zbdc"/><path class="k4cg9fk4z"/></g>`,
		"fallback": "streamline-cyber-color:tag-2",
	});
}

export default Component;
