import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5l3pwbfr.css';
import '../../css/e/ebajzhbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5l3pwbfr"/><path class="ebajzhbrq"/></g>`,
		"fallback": "coolicons:scissors-duotone-round",
	});
}

export default Component;
