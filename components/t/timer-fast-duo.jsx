import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfb_y0bgv.css';
import '../../css/t/tz3jlipja.css';
import '../../css/g/gf6_545td.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gfb_y0bgv"/><path class="tz3jlipja"/><path class="gf6_545td"/></g>`,
		"fallback": "glyphs:timer-fast-duo",
	});
}

export default Component;
