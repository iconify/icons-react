import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_afyp2cl.css';
import '../../css/n/nyao4fbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_afyp2cl"/><path class="nyao4fbjc"/></g>`,
		"fallback": "si:thumb-up-alt-1-duotone",
	});
}

export default Component;
