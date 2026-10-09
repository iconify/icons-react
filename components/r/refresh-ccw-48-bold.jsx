import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnn54cb4h.css';
import '../../css/m/mhloycbtk.css';
import '../../css/f/fl7_klb8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnn54cb4h"/><path class="mhloycbtk"/><path class="fl7_klb8v"/>`,
		"fallback": "energy-icons:refresh-ccw-48-bold",
	});
}

export default Component;
