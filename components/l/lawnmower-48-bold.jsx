import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2j8o9s_m.css';
import '../../css/n/n6kousbsq.css';
import '../../css/i/igillabjp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2j8o9s_m"/><path class="n6kousbsq"/><path class="igillabjp"/>`,
		"fallback": "energy-icons:lawnmower-48-bold",
	});
}

export default Component;
