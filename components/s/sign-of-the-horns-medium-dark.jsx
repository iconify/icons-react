import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h50mu2eby.css';
import '../../css/w/w4r0y1bff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h50mu2eby"/><path class="w4r0y1bff"/></g>`,
		"fallback": "fluent-emoji-flat:sign-of-the-horns-medium-dark",
	});
}

export default Component;
