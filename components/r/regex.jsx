import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nr-fnsb6v.css';
import '../../css/y/y6courxqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nr-fnsb6v"/><path class="y6courxqv"/></g>`,
		"fallback": "withicons-retro:regex",
	});
}

export default Component;
