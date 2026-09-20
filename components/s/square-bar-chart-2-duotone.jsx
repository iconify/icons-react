import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwaj0vjwi.css';
import '../../css/d/dfvafvs5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lwaj0vjwi"/><path class="dfvafvs5r"/></g>`,
		"fallback": "keyline-icons:square-bar-chart-2-duotone",
	});
}

export default Component;
