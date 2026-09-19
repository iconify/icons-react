import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/onvwtm0bf.css';
import '../../css/x/x-0x3eb3f.css';
import '../../css/m/m-j0d04lz.css';
import '../../css/b/bukp5cceq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="onvwtm0bf"/><path class="x-0x3eb3f"/><circle class="m-j0d04lz"/><path class="bukp5cceq"/></g>`,
		"fallback": "icon-park-outline:tape-measure",
	});
}

export default Component;
