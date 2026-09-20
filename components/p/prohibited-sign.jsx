import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crsw-fb_d.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/y9f5wvx3z.css';
import '../../css/k/ksr_5bbwe.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crsw-fb_d"/><g class="jn8qy4bru"><path class="y9f5wvx3z"/><path class="ksr_5bbwe"/></g>`,
		"fallback": "openmoji:prohibited-sign",
	});
}

export default Component;
