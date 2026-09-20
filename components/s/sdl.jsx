import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/doprogbdx.css';
import '../../css/b/b5tmlbjxo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="doprogbdx"/><path class="b5tmlbjxo"/></g>`,
		"fallback": "thesvg:sdl",
	});
}

export default Component;
