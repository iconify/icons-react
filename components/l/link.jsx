import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hz2ffhbor.css';
import '../../css/e/edqdv4a4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hz2ffhbor"/><path class="edqdv4a4p"/></g>`,
		"fallback": "fluent-emoji-flat:link",
	});
}

export default Component;
