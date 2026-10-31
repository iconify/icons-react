import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cropnwbca.css';
import '../../css/d/dnhjjpb4j.css';
import '../../css/w/wom-ykb0n.css';
import '../../css/w/w7m43vbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cropnwbca wm-shadow"/><path class="dnhjjpb4j wm-shadow"/><path class="wom-ykb0n"/><path class="w7m43vbrf"/></g>`,
		"fallback": "withicons-brutal:watch",
	});
}

export default Component;
