import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ey9pj5b2u.css';
import '../../css/m/mxqmbab-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ey9pj5b2u"/><path class="mxqmbab-n"/></g>`,
		"fallback": "keyline-icons:sofa-sharp-fill",
	});
}

export default Component;
