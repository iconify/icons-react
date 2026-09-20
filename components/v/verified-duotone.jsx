import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-p5pib2x.css';
import '../../css/k/k3omn0xcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-p5pib2x"/><path class="k3omn0xcp"/></g>`,
		"fallback": "si:verified-duotone",
	});
}

export default Component;
