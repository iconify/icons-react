import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fvdgcacqf.css';
import '../../css/t/tv9-0gble.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fvdgcacqf"/><path clip-rule="evenodd" class="tv9-0gble"/></g>`,
		"fallback": "glyphs:light-switch-bold",
	});
}

export default Component;
