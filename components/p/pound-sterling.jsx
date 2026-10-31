import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rjfa5r6oo.css';
import '../../css/r/ryfnj1b-x.css';
import '../../css/c/chbn-o-on.css';
import '../../css/h/hfvrmofqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rjfa5r6oo wm-shadow"/><path class="ryfnj1b-x wm-shadow"/><path class="chbn-o-on"/><path class="hfvrmofqf"/></g>`,
		"fallback": "withicons-brutal:pound-sterling",
	});
}

export default Component;
