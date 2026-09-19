import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6uhgb0kc.css';
import '../../css/g/g21074bjd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v6uhgb0kc"/><path class="g21074bjd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:round-pushpin",
	});
}

export default Component;
