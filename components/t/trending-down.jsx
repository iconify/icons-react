import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gws-leb8d.css';
import '../../css/u/u2ini8tzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gws-leb8d"/><path class="u2ini8tzw"/></g>`,
		"fallback": "withicons-retro:trending-down",
	});
}

export default Component;
