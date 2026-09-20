import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ek5fzbcvb.css';
import '../../css/n/nok7ymbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ek5fzbcvb"/><path class="nok7ymbzq"/></g>`,
		"fallback": "keyline-icons:smartphone-horizontal-sharp-duotone",
	});
}

export default Component;
