import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6_6vnb_g.css';
import '../../css/r/rv8h4xbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6_6vnb_g"/><path class="rv8h4xbin"/></g>`,
		"fallback": "coolicons:row-plus-duotone-round",
	});
}

export default Component;
