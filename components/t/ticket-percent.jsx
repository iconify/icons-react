import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/awo16gfmb.css';
import '../../css/i/ib9nf2tbe.css';
import '../../css/g/gvqb6nmyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="awo16gfmb"/><path class="ib9nf2tbe"/><path class="gvqb6nmyw"/></g>`,
		"fallback": "withicons-bauhaus:ticket-percent",
	});
}

export default Component;
