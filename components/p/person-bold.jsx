import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uhuttvbwb.css';
import '../../css/a/ajai_ri1j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uhuttvbwb"/><path class="ajai_ri1j"/></g>`,
		"fallback": "glyphs:person-bold",
	});
}

export default Component;
