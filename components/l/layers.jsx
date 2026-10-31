import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/eeti25b6w.css';
import '../../css/a/aquxjp_5d.css';
import '../../css/u/u4zfh0ltz.css';
import '../../css/v/v7fi7eb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="eeti25b6w wm-shadow"/><path class="aquxjp_5d wm-shadow"/><path class="u4zfh0ltz"/><path class="v7fi7eb_b"/></g>`,
		"fallback": "withicons-brutal:layers",
	});
}

export default Component;
