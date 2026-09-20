import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/smliiibgb.css';
import '../../css/u/ue4vn055y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="smliiibgb"/><path class="ue4vn055y"/></g>`,
		"fallback": "keyline-icons:square-dashed-three-quarter-fill",
	});
}

export default Component;
