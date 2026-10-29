import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hk0frlb2j.css';
import '../../css/d/d2lm7gb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hk0frlb2j"/><path class="d2lm7gb0q"/></g>`,
		"fallback": "withicons-bauhaus:variable",
	});
}

export default Component;
