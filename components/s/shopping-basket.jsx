import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jd3q37xib.css';
import '../../css/p/p6_e-iwkh.css';
import '../../css/g/gfdj51b0b.css';
import '../../css/z/zcqka2s9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jd3q37xib wm-shadow"/><path class="p6_e-iwkh wm-shadow"/><path class="gfdj51b0b"/><path class="zcqka2s9e"/></g>`,
		"fallback": "withicons-brutal:shopping-basket",
	});
}

export default Component;
