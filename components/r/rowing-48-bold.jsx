import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfamm_bud.css';
import '../../css/m/mg071ztjv.css';
import '../../css/n/nxyg22omp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfamm_bud"/><path class="mg071ztjv"/><path class="nxyg22omp"/>`,
		"fallback": "energy-icons:rowing-48-bold",
	});
}

export default Component;
