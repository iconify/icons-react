import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hsspbib0h.css';
import '../../css/l/lcp4xrb3k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hsspbib0h"/><path class="lcp4xrb3k"/></g>`,
		"fallback": "glyphs:snow-outline",
	});
}

export default Component;
