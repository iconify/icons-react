import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyewybbeq.css';
import '../../css/b/btrew6bni.css';
import '../../css/n/nmxnfxicr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pyewybbeq"/><path class="btrew6bni"/><path class="nmxnfxicr"/></g>`,
		"fallback": "glyphs-poly:sort-amount-down",
	});
}

export default Component;
