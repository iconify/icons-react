import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s446_nmsp.css';
import '../../css/i/irw3ow_qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s446_nmsp"/><path class="irw3ow_qs"/></g>`,
		"fallback": "keyline-icons:timer-sharp-duotone",
	});
}

export default Component;
