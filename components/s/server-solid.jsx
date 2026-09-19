import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lr_olcm9v.css';
import '../../css/y/yygfuibka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lr_olcm9v"/><path clip-rule="evenodd" class="yygfuibka"/></g>`,
		"fallback": "heroicons:server-solid",
	});
}

export default Component;
