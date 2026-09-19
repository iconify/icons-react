import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipgt47_0k.css';
import '../../css/r/r-pqkabzn.css';
import '../../css/f/f2_lv5bmr.css';
import '../../css/d/d6k18obis.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ipgt47_0k"/><path class="r-pqkabzn"/><path clip-rule="evenodd" class="f2_lv5bmr"/><path class="d6k18obis"/></g>`,
		"fallback": "glyphs-poly:night",
	});
}

export default Component;
