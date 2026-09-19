import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/o/odr9kebnr.css';
import '../../css/v/v-_fyf87r.css';
import '../../css/g/g-w8mh2vs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="odr9kebnr"/><path class="v-_fyf87r"/><path class="g-w8mh2vs"/></g>`,
		"fallback": "flag:ro-1x1",
	});
}

export default Component;
