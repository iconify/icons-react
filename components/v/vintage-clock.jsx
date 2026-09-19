import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dhvj8qb5m.css';
import '../../css/u/ur_5djb1t.css';
import '../../css/i/i8h-plf8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dhvj8qb5m"/><path class="ur_5djb1t"/><path class="i8h-plf8e"/></g>`,
		"fallback": "hugeicons:vintage-clock",
	});
}

export default Component;
