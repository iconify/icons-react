import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a2g50kbow.css';
import '../../css/m/mpd_1lbjv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a2g50kbow"/><path class="mpd_1lbjv"/></g>`,
		"fallback": "bi:r-square-fill",
	});
}

export default Component;
