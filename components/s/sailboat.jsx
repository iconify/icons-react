import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cpmj-zyag.css';
import '../../css/y/y4lxgnbtg.css';
import '../../css/d/dfuwvpm9r.css';
import '../../css/w/wn0b60jhn.css';
import '../../css/e/ek29908kl.css';
import '../../css/y/y6d_eu5he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cpmj-zyag wm-shadow"/><path class="wm-shadow y4lxgnbtg"/><path class="dfuwvpm9r"/><path class="wn0b60jhn"/><path class="ek29908kl"/><path class="y6d_eu5he"/></g>`,
		"fallback": "withicons-brutal:sailboat",
	});
}

export default Component;
