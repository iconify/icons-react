import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nt3rw9brh.css';
import '../../css/y/yhkl-u56l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nt3rw9brh"/><path class="yhkl-u56l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:ox",
	});
}

export default Component;
