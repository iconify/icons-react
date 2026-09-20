import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l907abc-p.css';
import '../../css/s/s4yrrcccm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l907abc-p"/><path class="s4yrrcccm"/></g>`,
		"fallback": "si:octagon-duotone",
	});
}

export default Component;
