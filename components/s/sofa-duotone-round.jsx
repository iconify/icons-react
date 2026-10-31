import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxsra3g5k.css';
import '../../css/o/ojknjol7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxsra3g5k"/><path class="ojknjol7p"/></g>`,
		"fallback": "coolicons:sofa-duotone-round",
	});
}

export default Component;
