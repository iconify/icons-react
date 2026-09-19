import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0p8obcpt.css';
import '../../css/p/pa7wtxbrv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0p8obcpt"/><path class="pa7wtxbrv"/></g>`,
		"fallback": "glyphs:recycle-duo",
	});
}

export default Component;
