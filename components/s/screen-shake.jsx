import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tbxfxzvwf.css';
import '../../css/i/i7or708cv.css';
import '../../css/f/firyp-b6b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tbxfxzvwf"/><path clip-rule="evenodd" class="i7or708cv"/><path class="firyp-b6b"/></g>`,
		"fallback": "at-icons:screen-shake",
	});
}

export default Component;
