import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eyaxnnbol.css';
import '../../css/e/e7v404bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="eyaxnnbol"/><path class="e7v404bbx"/></g>`,
		"fallback": "withicons-retro:refresh",
	});
}

export default Component;
