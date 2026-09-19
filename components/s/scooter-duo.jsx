import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lch3s_b1x.css';
import '../../css/w/wqxztlbrk.css';
import '../../css/z/zjouw2d4k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lch3s_b1x"/><path class="wqxztlbrk"/><path class="zjouw2d4k"/></g>`,
		"fallback": "glyphs:scooter-duo",
	});
}

export default Component;
