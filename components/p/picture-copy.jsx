import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k52h7evjr.css';
import '../../css/u/u73h1tb4c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k52h7evjr"/><path class="u73h1tb4c"/></g>`,
		"fallback": "si-glyph:picture-copy",
	});
}

export default Component;
