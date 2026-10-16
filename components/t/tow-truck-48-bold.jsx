import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy406sb7c.css';
import '../../css/e/e1grfmb0c.css';
import '../../css/r/rb4cb762a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy406sb7c"/><path class="e1grfmb0c"/><path class="rb4cb762a"/>`,
		"fallback": "energy-icons:tow-truck-48-bold",
	});
}

export default Component;
