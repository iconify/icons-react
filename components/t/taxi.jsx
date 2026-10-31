import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d76isc4xa.css';
import '../../css/x/x5o9c3b9k.css';
import '../../css/z/z1covxg5q.css';
import '../../css/k/kg722w7zm.css';
import '../../css/k/kltw9zi6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d76isc4xa wm-shadow"/><path class="wm-shadow x5o9c3b9k"/><path class="z1covxg5q"/><path class="kg722w7zm"/><path class="kltw9zi6r"/></g>`,
		"fallback": "withicons-brutal:taxi",
	});
}

export default Component;
