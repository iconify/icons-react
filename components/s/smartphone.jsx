import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/ftn4-ib5z.css';
import '../../css/x/xdj0mwx3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ftn4-ib5z"/><path class="xdj0mwx3w"/></g>`,
		"fallback": "hugeicons:smartphone",
	});
}

export default Component;
