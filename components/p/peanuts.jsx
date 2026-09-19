import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hu41n75dx.css';
import '../../css/h/hvp1ndb5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hu41n75dx"/><path class="hvp1ndb5j"/></g>`,
		"fallback": "fluent-emoji-high-contrast:peanuts",
	});
}

export default Component;
