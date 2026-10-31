import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-8ocqb_t.css';
import '../../css/p/p1d--d9px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-8ocqb_t"/><path class="p1d--d9px"/></g>`,
		"fallback": "coolicons:podium-duotone-round",
	});
}

export default Component;
