import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohddqdbak.css';
import '../../css/p/pq65h8bcm.css';
import '../../css/w/whxwn3bgk.css';
import '../../css/g/gdjsmd05b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ohddqdbak"><path class="pq65h8bcm"/><path class="whxwn3bgk"/></g><path class="gdjsmd05b"/>`,
		"fallback": "flat-color-icons:key",
	});
}

export default Component;
