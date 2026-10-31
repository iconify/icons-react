import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r66p82bnb.css';
import '../../css/d/dn_yk0bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r66p82bnb"/><path class="dn_yk0bps"/></g>`,
		"fallback": "coolicons:radiation-duotone-round",
	});
}

export default Component;
