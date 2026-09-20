import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j6ddfqney.css';
import '../../css/h/h9umwjb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="j6ddfqney"/><path class="h9umwjb0c"/></g>`,
		"fallback": "keyline-icons:package-check-fill",
	});
}

export default Component;
