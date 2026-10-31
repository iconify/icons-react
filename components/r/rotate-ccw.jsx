import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gi8mjmbuh.css';
import '../../css/i/ioj0hbc5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gi8mjmbuh"/><path class="ioj0hbc5v"/></g>`,
		"fallback": "withicons-retro:rotate-ccw",
	});
}

export default Component;
