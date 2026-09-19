import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0zn8qx8k.css';
import '../../css/o/ovlcvab_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b0zn8qx8k"/><path class="ovlcvab_v"/></g>`,
		"fallback": "gg:smart-home-light",
	});
}

export default Component;
