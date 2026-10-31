import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pul5gegza.css';
import '../../css/r/rs0f_qurf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pul5gegza"/><path class="rs0f_qurf"/></g>`,
		"fallback": "coolicons:mouse-duotone-round",
	});
}

export default Component;
