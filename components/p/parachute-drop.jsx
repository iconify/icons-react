import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/q/qvdify37g.css';
import '../../css/h/hb6-3bcix.css';
import '../../css/i/io58fh8oh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="qvdify37g"/><path class="hb6-3bcix"/><path class="io58fh8oh"/></g>`,
		"fallback": "streamline-plump:parachute-drop",
	});
}

export default Component;
