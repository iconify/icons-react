import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jd3kq3buz.css';
import '../../css/b/bx_g37uox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jd3kq3buz"/><path class="bx_g37uox"/></g>`,
		"fallback": "reicon:slider-horizontal",
	});
}

export default Component;
