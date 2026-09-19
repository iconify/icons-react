import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-mta2b1j.css';
import '../../css/n/n-8nlf-6p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-mta2b1j"/><path class="n-8nlf-6p"/></g>`,
		"fallback": "glyphs-poly:replay",
	});
}

export default Component;
