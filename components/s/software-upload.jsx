import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t8jd6ryzw.css';
import '../../css/v/v60qzebwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t8jd6ryzw"/><path class="v60qzebwv"/></g>`,
		"fallback": "gg:software-upload",
	});
}

export default Component;
