import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xx8tz3sra.css';
import '../../css/m/mokeq2b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xx8tz3sra"/><path class="mokeq2b5h"/></g>`,
		"fallback": "withicons-retro:loader",
	});
}

export default Component;
