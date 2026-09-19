import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq5e0lw6b.css';
import '../../css/d/d2ja3uk6v.css';
import '../../css/d/dsk89bmik.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pq5e0lw6b"><path class="d2ja3uk6v"/><path class="dsk89bmik"/></g>`,
		"fallback": "gis:rotate",
	});
}

export default Component;
