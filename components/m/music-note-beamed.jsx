import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqrt1ty8j.css';
import '../../css/r/rsh-9wb7s.css';
import '../../css/v/vsecb4i9o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqrt1ty8j"/><path class="rsh-9wb7s"/><path class="vsecb4i9o"/></g>`,
		"fallback": "bi:music-note-beamed",
	});
}

export default Component;
