import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q-vy7dzjz.css';
import '../../css/m/mmzdc10sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q-vy7dzjz"/><path class="mmzdc10sc"/></g>`,
		"fallback": "keyline-icons:truck-plus-sharp-two-tone",
	});
}

export default Component;
