import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hp8-l5bxx.css';
import '../../css/p/puuojebkg.css';
import '../../css/i/ivqa4kblz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hp8-l5bxx"/><path class="puuojebkg"/><path class="ivqa4kblz"/></g>`,
		"fallback": "icon-park:pacifier",
	});
}

export default Component;
