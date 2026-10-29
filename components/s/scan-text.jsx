import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yxvqkwv7c.css';
import '../../css/g/g_2pghbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="yxvqkwv7c"/><path class="g_2pghbag"/></g>`,
		"fallback": "withicons-bauhaus:scan-text",
	});
}

export default Component;
