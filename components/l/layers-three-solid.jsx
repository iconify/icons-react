import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rth2zpu4a.css';
import '../../css/k/kt1i1dx8i.css';
import '../../css/n/nyo6-kbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rth2zpu4a"/><path class="kt1i1dx8i"/><path class="nyo6-kbvt"/></g>`,
		"fallback": "mynaui:layers-three-solid",
	});
}

export default Component;
