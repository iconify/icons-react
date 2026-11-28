import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ka7jpfb3i.css';
import '../../css/i/ih76u0bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ka7jpfb3i secondary"/><path class="ih76u0bcg primary"/></g>`,
		"fallback": "iconaut:scale-balance-duotone",
	});
}

export default Component;
