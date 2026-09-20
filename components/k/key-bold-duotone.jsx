import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1mgsdnfj.css';
import '../../css/p/pk2k6gb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x1mgsdnfj"/><path class="pk2k6gb4d"/></g>`,
		"fallback": "solar:key-bold-duotone",
	});
}

export default Component;
