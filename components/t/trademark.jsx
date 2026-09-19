import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f2g0j6vag.css';
import '../../css/a/a3mmebbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f2g0j6vag"/><path class="a3mmebbyn"/></g>`,
		"fallback": "hugeicons:trademark",
	});
}

export default Component;
