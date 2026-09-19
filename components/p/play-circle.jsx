import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wc2k_3bib.css';
import '../../css/y/y7-ymuuzo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wc2k_3bib"/><path class="y7-ymuuzo"/></g>`,
		"fallback": "glyphs-poly:play-circle",
	});
}

export default Component;
