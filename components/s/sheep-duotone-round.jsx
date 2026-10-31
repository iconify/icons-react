import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u24z3jtfd.css';
import '../../css/w/wta6pi43a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u24z3jtfd"/><path class="wta6pi43a"/></g>`,
		"fallback": "coolicons:sheep-duotone-round",
	});
}

export default Component;
