import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i2_y28f8i.css';
import '../../css/z/z-pgs8kbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i2_y28f8i"/><path class="z-pgs8kbj"/></g>`,
		"fallback": "pixelarticons:teach-sharp",
	});
}

export default Component;
