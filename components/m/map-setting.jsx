import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-dghzoev.css';
import '../../css/f/f_bh4ymce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u-dghzoev"/><path class="f_bh4ymce"/></g>`,
		"fallback": "tdesign:map-setting",
	});
}

export default Component;
