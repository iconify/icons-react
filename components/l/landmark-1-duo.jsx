import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ph_1w6hfa.css';
import '../../css/u/uj_bynbfu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ph_1w6hfa"/><path class="uj_bynbfu"/></g>`,
		"fallback": "glyphs:landmark-1-duo",
	});
}

export default Component;
