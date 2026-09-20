import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgnnpvp3x.css';
import '../../css/z/z1o6e0v5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgnnpvp3x"/><path class="z1o6e0v5j"/></g>`,
		"fallback": "majesticons:music-note",
	});
}

export default Component;
