import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmzmn_bsa.css';
import '../../css/t/tf5y_6b6k.css';
import '../../css/k/k6e-3tb2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmzmn_bsa"/><path class="tf5y_6b6k"/><path class="k6e-3tb2t"/>`,
		"fallback": "energy-icons:pickup-truck-48-bold",
	});
}

export default Component;
