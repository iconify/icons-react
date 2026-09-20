import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v968k7fju.css';
import '../../css/i/irw3ow_qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v968k7fju"/><path class="irw3ow_qs"/></g>`,
		"fallback": "keyline-icons:timer-reset-sharp-two-tone",
	});
}

export default Component;
