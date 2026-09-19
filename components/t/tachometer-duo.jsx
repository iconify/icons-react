import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8ebzs-6d.css';
import '../../css/m/mpj41y35s.css';
import '../../css/v/vhsahq0yk.css';
import '../../css/i/iy5jtk2cn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8ebzs-6d"/><path class="mpj41y35s"/><path class="vhsahq0yk"/><path class="iy5jtk2cn"/></g>`,
		"fallback": "glyphs:tachometer-duo",
	});
}

export default Component;
