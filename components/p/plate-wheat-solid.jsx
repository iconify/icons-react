import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2upxweic.css';
import '../../css/z/ztouz-b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g2upxweic"/><path class="ztouz-b5w"/></g>`,
		"fallback": "flowbite:plate-wheat-solid",
	});
}

export default Component;
