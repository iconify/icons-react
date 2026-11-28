import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vr8zr9bgz.css';
import '../../css/n/ns1d9zv3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vr8zr9bgz"/><path class="ns1d9zv3m primary"/></g>`,
		"fallback": "iconaut:key-square-duotone",
	});
}

export default Component;
