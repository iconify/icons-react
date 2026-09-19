import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iq3urktpq.css';
import '../../css/n/nolgr3baj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iq3urktpq"/><path class="nolgr3baj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:light-rail",
	});
}

export default Component;
