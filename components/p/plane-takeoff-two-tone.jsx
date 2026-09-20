import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lcr5o5b5e.css';
import '../../css/x/xx2d10y6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lcr5o5b5e"/><path class="xx2d10y6p"/></g>`,
		"fallback": "keyline-icons:plane-takeoff-two-tone",
	});
}

export default Component;
