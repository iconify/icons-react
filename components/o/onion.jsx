import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6l-kpbwa.css';
import '../../css/n/ngq2artnh.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jdn1rvbrs.css';
import '../../css/a/aukz7zd6r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6l-kpbwa"/><path class="ngq2artnh"/><g class="jn8qy4bru"><path class="jdn1rvbrs"/><path class="aukz7zd6r"/></g>`,
		"fallback": "openmoji:onion",
	});
}

export default Component;
