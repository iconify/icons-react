import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oa8uxcckh.css';
import '../../css/v/vy_dwwbew.css';
import '../../css/q/qlkb9wqjy.css';
import '../../css/o/olt2-ybec.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oa8uxcckh"/><path class="vy_dwwbew"/><path class="qlkb9wqjy"/><path class="olt2-ybec"/></g>`,
		"fallback": "glyphs:smoke-duo",
	});
}

export default Component;
