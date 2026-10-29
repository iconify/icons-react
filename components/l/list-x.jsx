import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tlehfg-gr.css';
import '../../css/a/ajv2b6b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tlehfg-gr wm-k"/><path class="ajv2b6b5q wm-s"/></g>`,
		"fallback": "withicons-bauhaus:list-x",
	});
}

export default Component;
