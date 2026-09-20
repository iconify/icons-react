import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkauiilsq.css';
import '../../css/x/xzyt_-31h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nkauiilsq"/><path clip-rule="evenodd" class="xzyt_-31h"/></g>`,
		"fallback": "reicon:ufo2",
	});
}

export default Component;
