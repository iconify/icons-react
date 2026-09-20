import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a3_uysk5u.css';
import '../../css/l/lky0-xvxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a3_uysk5u"/><path clip-rule="evenodd" class="lky0-xvxb"/></g>`,
		"fallback": "solar:upload-bold-duotone",
	});
}

export default Component;
