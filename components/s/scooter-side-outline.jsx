import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eal31mb-u.css';
import '../../css/g/gism10kxv.css';
import '../../css/h/hjjrncb6u.css';
import '../../css/r/ritk-ujbc.css';
import '../../css/e/e04mzdb9t.css';
import '../../css/p/p8a_bkb3z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eal31mb-u"/><path clip-rule="evenodd" class="gism10kxv"/><path clip-rule="evenodd" class="hjjrncb6u"/><path class="ritk-ujbc"/><path clip-rule="evenodd" class="e04mzdb9t"/><path clip-rule="evenodd" class="p8a_bkb3z"/></g>`,
		"fallback": "glyphs:scooter-side-outline",
	});
}

export default Component;
