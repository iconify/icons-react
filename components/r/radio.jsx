import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1eyxk45w.css';
import '../../css/k/k301ptson.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1eyxk45w"/><path class="k301ptson"/></g>`,
		"fallback": "fluent-emoji-high-contrast:radio",
	});
}

export default Component;
