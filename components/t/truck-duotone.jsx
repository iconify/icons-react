import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qetg0cb2c.css';
import '../../css/d/dexqwyboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qetg0cb2c"/><path class="dexqwyboi"/></g>`,
		"fallback": "keyline-icons:truck-duotone",
	});
}

export default Component;
