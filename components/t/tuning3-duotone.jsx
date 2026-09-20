import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cmtel7b8k.css';
import '../../css/u/uc0xz3byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cmtel7b8k"/><path class="uc0xz3byl"/></g>`,
		"fallback": "reicon:tuning3-duotone",
	});
}

export default Component;
