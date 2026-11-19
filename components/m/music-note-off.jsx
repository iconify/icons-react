import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r541ajsgd.css';
import '../../css/w/wcg70ob_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r541ajsgd"/><path class="wcg70ob_d"/></g>`,
		"fallback": "andrsrxn:music-note-off",
	});
}

export default Component;
