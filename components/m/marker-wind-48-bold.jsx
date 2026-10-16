import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlms99xu.css';
import '../../css/t/tzva1-tot.css';
import '../../css/x/x_g1zubgb.css';
import '../../css/s/s0rp5vqeb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlms99xu"/><path class="tzva1-tot"/><path class="x_g1zubgb"/><path class="s0rp5vqeb"/>`,
		"fallback": "energy-icons:marker-wind-48-bold",
	});
}

export default Component;
