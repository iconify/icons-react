import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq-huebfb.css';
import '../../css/d/duigjdb_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="pq-huebfb"/><path class="duigjdb_e"/></g>`,
		"fallback": "thesvg-color:runframe",
	});
}

export default Component;
