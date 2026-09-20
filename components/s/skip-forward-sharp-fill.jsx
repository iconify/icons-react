import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j1-j4unxp.css';
import '../../css/a/afoagpens.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j1-j4unxp"/><path class="afoagpens"/></g>`,
		"fallback": "keyline-icons:skip-forward-sharp-fill",
	});
}

export default Component;
