import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxi2rbnm.css';
import '../../css/s/swm2e_bdf.css';
import '../../css/v/v3k9cy9kd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wnxi2rbnm"><path clip-rule="evenodd" class="swm2e_bdf"/><path class="v3k9cy9kd"/></g>`,
		"fallback": "streamline-plump-color:steps-1-flat",
	});
}

export default Component;
