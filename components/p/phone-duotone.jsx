import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_lm4c6il.css';
import '../../css/u/uc0dztbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_lm4c6il"/><path class="uc0dztbmk"/></g>`,
		"fallback": "iconamoon:phone-duotone",
	});
}

export default Component;
