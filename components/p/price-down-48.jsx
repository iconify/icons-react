import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1ftczb6h.css';
import '../../css/d/dlrxuzy1s.css';
import '../../css/k/kyrmlcowv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1ftczb6h"/><path class="dlrxuzy1s"/><path class="kyrmlcowv"/>`,
		"fallback": "energy-icons:price-down-48",
	});
}

export default Component;
