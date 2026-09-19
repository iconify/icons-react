import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uaivxvbum.css';
import '../../css/g/g6wemnuvr.css';
import '../../css/y/yziy07b-n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uaivxvbum"/><path class="g6wemnuvr"/><path class="yziy07b-n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-supervillain",
	});
}

export default Component;
