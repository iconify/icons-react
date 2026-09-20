import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vo2zbvecc.css';
import '../../css/z/z49wz6bue.css';
import '../../css/c/ce6ok6s3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vo2zbvecc"/><path class="z49wz6bue"/><path class="ce6ok6s3z"/></g>`,
		"fallback": "solar:laptop-minimalistic-bold-duotone",
	});
}

export default Component;
