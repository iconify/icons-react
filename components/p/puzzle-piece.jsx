import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d5ct4lbiy.css';
import '../../css/c/chf42nrhi.css';
import '../../css/y/yt88x7rlf.css';
import '../../css/x/xrspqab6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d5ct4lbiy wm-shadow"/><path class="chf42nrhi wm-shadow"/><path class="yt88x7rlf"/><path class="xrspqab6t"/></g>`,
		"fallback": "withicons-brutal:puzzle-piece",
	});
}

export default Component;
