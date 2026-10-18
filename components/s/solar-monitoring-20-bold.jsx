import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhz704nam.css';
import '../../css/o/odoplnlhz.css';
import '../../css/k/kv_uf3bpr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhz704nam"/><path class="odoplnlhz"/><path class="kv_uf3bpr"/>`,
		"fallback": "energy-icons:solar-monitoring-20-bold",
	});
}

export default Component;
