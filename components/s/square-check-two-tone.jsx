import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwaj0vjwi.css';
import '../../css/i/i5lvicvhn.css';
import '../../css/c/c7--g1yoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lwaj0vjwi"/><path class="i5lvicvhn"/><path class="c7--g1yoy"/></g>`,
		"fallback": "keyline-icons:square-check-two-tone",
	});
}

export default Component;
