import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wz58sqbzm.css';
import '../../css/s/sxobbkbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wz58sqbzm"/><path class="primary sxobbkbzy"/></g>`,
		"fallback": "iconaut:smartphone-duotone",
	});
}

export default Component;
