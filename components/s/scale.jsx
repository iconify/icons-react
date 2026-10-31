import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tjph0lvsp.css';
import '../../css/r/r9qx50bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tjph0lvsp"/><path class="r9qx50bdp"/></g>`,
		"fallback": "withicons-retro:scale",
	});
}

export default Component;
