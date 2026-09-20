import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bao114b7h.css';
import '../../css/j/jbekqhbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bao114b7h"/><path class="jbekqhbbc"/></g>`,
		"fallback": "reicon:login-2",
	});
}

export default Component;
