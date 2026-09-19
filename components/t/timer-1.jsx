import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abr_kgi4p.css';
import '../../css/r/r5p16_b3f.css';
import '../../css/n/nl3003msu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="abr_kgi4p"/><path class="r5p16_b3f"/><path class="nl3003msu"/></g>`,
		"fallback": "glyphs-poly:timer-1",
	});
}

export default Component;
