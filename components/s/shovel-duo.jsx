import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwv_vsrba.css';
import '../../css/z/zmjfwxbnz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hwv_vsrba"/><path class="zmjfwxbnz"/></g>`,
		"fallback": "glyphs:shovel-duo",
	});
}

export default Component;
