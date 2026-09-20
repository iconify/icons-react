import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-c947zah.css';
import '../../css/k/k49q9mbht.css';
import '../../css/j/ju09as3xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c-c947zah"/><path class="k49q9mbht"/><path class="ju09as3xn"/></g>`,
		"fallback": "reicon:rotation-filled",
	});
}

export default Component;
