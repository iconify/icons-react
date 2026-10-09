import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec_lwoagr.css';
import '../../css/f/flbf2qb7n.css';
import '../../css/t/t7622gbla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec_lwoagr"/><path class="flbf2qb7n"/><path class="t7622gbla"/>`,
		"fallback": "energy-icons:motion-sensor-48-bold",
	});
}

export default Component;
