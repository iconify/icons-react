import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/krwoeccgz.css';
import '../../css/h/howolopok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="krwoeccgz"/><path class="howolopok"/></g>`,
		"fallback": "withicons-retro:radio-tower",
	});
}

export default Component;
