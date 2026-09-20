import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/smliiibgb.css';
import '../../css/d/d73-bct-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="smliiibgb"/><path class="d73-bct-o"/></g>`,
		"fallback": "keyline-icons:square-dashed-quarter-fill",
	});
}

export default Component;
