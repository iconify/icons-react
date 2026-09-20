import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtpeol8nf.css';
import '../../css/i/irqob_miv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vtpeol8nf"/><path class="irqob_miv"/></g>`,
		"fallback": "streamline-ultimate-color:swimming-pool-stairs",
	});
}

export default Component;
