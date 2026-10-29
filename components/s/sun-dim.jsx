import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yc8u47b7x.css';
import '../../css/e/ensakqs6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="yc8u47b7x"/><path class="ensakqs6f"/></g>`,
		"fallback": "withicons-bauhaus:sun-dim",
	});
}

export default Component;
