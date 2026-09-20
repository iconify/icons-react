import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlgjvjvel.css';
import '../../css/l/l45iarbss.css';
import '../../css/u/uw9kubtnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hlgjvjvel"/><path class="l45iarbss"/><path class="uw9kubtnn"/></g>`,
		"fallback": "tdesign:page-tab",
	});
}

export default Component;
