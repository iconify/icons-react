import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-457em4v.css';
import '../../css/c/c-q2d7bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-457em4v"/><path class="c-q2d7bal"/></g>`,
		"fallback": "iconamoon:location-duotone",
	});
}

export default Component;
