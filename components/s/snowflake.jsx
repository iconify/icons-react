import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v20r5eb6p.css';
import '../../css/d/dp-12tb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v20r5eb6p"/><path class="dp-12tb0o"/></g>`,
		"fallback": "withicons-retro:snowflake",
	});
}

export default Component;
