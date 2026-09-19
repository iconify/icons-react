import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whde91d0u.css';
import '../../css/i/ix3duqbuu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="whde91d0u"/><path class="ix3duqbuu"/></g>`,
		"fallback": "glyphs:sleet-bold",
	});
}

export default Component;
