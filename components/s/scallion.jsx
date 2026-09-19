import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dhh_pyb0c.css';
import '../../css/t/tu9wnccea.css';
import '../../css/f/fnwqy9rpp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dhh_pyb0c"/><path class="tu9wnccea"/><path class="fnwqy9rpp"/></g>`,
		"fallback": "icon-park:scallion",
	});
}

export default Component;
