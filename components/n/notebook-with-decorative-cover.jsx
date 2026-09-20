import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcorabc0l.css';
import '../../css/d/d17940b8y.css';
import '../../css/i/i27jsbb0p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/dek4c9xpb.css';
import '../../css/m/mf2yciplk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcorabc0l"/><path class="d17940b8y"/><path class="i27jsbb0p"/><g class="jn8qy4bru"><path class="dek4c9xpb"/><path class="mf2yciplk"/></g>`,
		"fallback": "openmoji:notebook-with-decorative-cover",
	});
}

export default Component;
