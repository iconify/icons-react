import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yw6pirb0p.css';
import '../../css/w/w624gabkq.css';
import '../../css/a/avjgxm8yh.css';
import '../../css/f/fz0a1-bzf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yw6pirb0p"/><path class="w624gabkq"/><path class="avjgxm8yh"/><path class="fz0a1-bzf"/></g>`,
		"fallback": "glyphs-poly:kick-scooter",
	});
}

export default Component;
