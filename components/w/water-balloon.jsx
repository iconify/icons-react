import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sjaga7_cv.css';
import '../../css/d/dilnqob0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sjaga7_cv"/><path class="dilnqob0c"/></g>`,
		"fallback": "withicons-bauhaus:water-balloon",
	});
}

export default Component;
