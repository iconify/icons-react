import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fram0bcsw.css';
import '../../css/o/oz54tcchs.css';
import '../../css/d/d4o8lobkk.css';
import '../../css/u/ux_xktusc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fram0bcsw"/><path class="oz54tcchs"/><path class="d4o8lobkk"/><path class="ux_xktusc"/>`,
		"fallback": "energy-icons:scales-48-bold",
	});
}

export default Component;
