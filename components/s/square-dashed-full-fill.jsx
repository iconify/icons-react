import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/smliiibgb.css';
import '../../css/f/f4sfcklhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="smliiibgb"/><path class="f4sfcklhv"/></g>`,
		"fallback": "keyline-icons:square-dashed-full-fill",
	});
}

export default Component;
