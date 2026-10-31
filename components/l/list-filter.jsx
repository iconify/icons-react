import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dlb330b-r.css';
import '../../css/p/pxfyn6_vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dlb330b-r"/><path class="pxfyn6_vw"/></g>`,
		"fallback": "withicons-retro:list-filter",
	});
}

export default Component;
