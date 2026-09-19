import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gssnz_6uu.css';
import '../../css/q/q4g7x6byd.css';
import '../../css/f/fv8g9ogfd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gssnz_6uu"/><path class="q4g7x6byd"/><path class="fv8g9ogfd"/></g>`,
		"fallback": "glyphs:turn-sign-duo",
	});
}

export default Component;
