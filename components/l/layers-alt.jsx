import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxxmxxb7c.css';
import '../../css/v/v-o59-bgv.css';
import '../../css/z/znj1xziig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uxxmxxb7c"/><path class="v-o59-bgv"/><path class="znj1xziig"/></g>`,
		"fallback": "reicon:layers-alt",
	});
}

export default Component;
