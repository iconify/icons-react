import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wx-wl3buj.css';
import '../../css/l/l01r5ubui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wx-wl3buj"/><path class="l01r5ubui"/></g>`,
		"fallback": "withicons-bauhaus:list-tree",
	});
}

export default Component;
