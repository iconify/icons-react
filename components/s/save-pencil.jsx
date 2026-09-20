import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x42kl_bij.css';
import '../../css/t/ts-qe4bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x42kl_bij"/><path class="ts-qe4bgv"/></g>`,
		"fallback": "proicons:save-pencil",
	});
}

export default Component;
