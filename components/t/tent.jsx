import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ab2k-wb5x.css';
import '../../css/f/fekz5e56y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ab2k-wb5x"/><path class="fekz5e56y"/></g>`,
		"fallback": "pixelarticons:tent",
	});
}

export default Component;
