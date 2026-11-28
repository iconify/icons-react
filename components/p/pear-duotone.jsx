import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h5hzd-bit.css';
import '../../css/n/n8mp86bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h5hzd-bit secondary"/><path class="n8mp86bxb primary"/></g>`,
		"fallback": "iconaut:pear-duotone",
	});
}

export default Component;
