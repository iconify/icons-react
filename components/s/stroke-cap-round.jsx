import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5fwk0b8u.css';
import '../../css/v/vpqnk6b6e.css';
import '../../css/p/pj4q9cj7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z5fwk0b8u"/><path class="vpqnk6b6e"/><path class="pj4q9cj7l"/></g>`,
		"fallback": "andrsrxn:stroke-cap-round",
	});
}

export default Component;
