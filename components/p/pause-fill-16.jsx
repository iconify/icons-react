import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pozmjpbgp.css';
import '../../css/v/vdcbkrbkq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="pozmjpbgp"/><rect class="vdcbkrbkq"/></g>`,
		"fallback": "garden:pause-fill-16",
	});
}

export default Component;
