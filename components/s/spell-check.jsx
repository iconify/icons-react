import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i5xb24-5j.css';
import '../../css/g/g3oghpbhf.css';
import '../../css/j/j9q42rbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i5xb24-5j wm-k"/><path class="g3oghpbhf"/><path class="j9q42rbzm wm-s"/></g>`,
		"fallback": "withicons-bauhaus:spell-check",
	});
}

export default Component;
