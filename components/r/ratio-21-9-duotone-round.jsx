import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cowy1jbzo.css';
import '../../css/l/lw45_5d3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cowy1jbzo"/><path class="lw45_5d3j"/></g>`,
		"fallback": "coolicons:ratio-21-9-duotone-round",
	});
}

export default Component;
