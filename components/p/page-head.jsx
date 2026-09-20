import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3-if-bdy.css';
import '../../css/v/vx_3io37s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3-if-bdy"/><path class="vx_3io37s"/></g>`,
		"fallback": "tdesign:page-head",
	});
}

export default Component;
