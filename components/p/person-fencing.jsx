import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ky1fo0cqv.css';
import '../../css/l/l6pf8oj4c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ky1fo0cqv"/><path class="l6pf8oj4c"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-fencing",
	});
}

export default Component;
