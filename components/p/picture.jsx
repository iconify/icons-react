import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f_f3a9b3b.css';
import '../../css/w/w3d-tf10v.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 1)" class="n1lsf0bnc"><path class="f_f3a9b3b"/><circle class="w3d-tf10v"/></g>`,
		"fallback": "si-glyph:picture",
	});
}

export default Component;
