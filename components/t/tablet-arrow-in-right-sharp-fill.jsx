import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gz6xjjb1q.css';
import '../../css/m/mkufoju3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="gz6xjjb1q"/><path class="mkufoju3m"/></g>`,
		"fallback": "keyline-icons:tablet-arrow-in-right-sharp-fill",
	});
}

export default Component;
