import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9sc9mb6r.css';
import '../../css/v/v18w0jb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l9sc9mb6r"/><path clip-rule="evenodd" class="v18w0jb-s"/></g>`,
		"fallback": "solar:star-fall-minimalistic-2-bold-duotone",
	});
}

export default Component;
