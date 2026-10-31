import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tut7yda2e.css';
import '../../css/h/h7bf-rbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tut7yda2e"/><path class="h7bf-rbgv"/></g>`,
		"fallback": "coolicons:map-duotone-round",
	});
}

export default Component;
