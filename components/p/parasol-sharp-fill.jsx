import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d34ut4blf.css';
import '../../css/e/e-ge8jqgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d34ut4blf"/><path class="e-ge8jqgg"/></g>`,
		"fallback": "keyline-icons:parasol-sharp-fill",
	});
}

export default Component;
