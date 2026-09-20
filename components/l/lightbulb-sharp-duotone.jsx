import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wb_71ubof.css';
import '../../css/e/em3zn9a_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wb_71ubof"/><path class="em3zn9a_e"/></g>`,
		"fallback": "keyline-icons:lightbulb-sharp-duotone",
	});
}

export default Component;
