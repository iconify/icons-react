import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwvau1b_s.css';
import '../../css/r/r6alq-bry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rwvau1b_s"/><path class="r6alq-bry"/></g>`,
		"fallback": "coolicons:robot-duotone-round",
	});
}

export default Component;
