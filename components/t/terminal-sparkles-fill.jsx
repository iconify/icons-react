import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d3az6pb8j.css';
import '../../css/w/w82uzebbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d3az6pb8j"/><path class="w82uzebbs"/></g>`,
		"fallback": "keyline-icons:terminal-sparkles-fill",
	});
}

export default Component;
