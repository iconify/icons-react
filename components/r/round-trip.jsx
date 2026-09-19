import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bb7v8zb1v.css';
import '../../css/s/s_bhinboa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bb7v8zb1v"/><path class="s_bhinboa"/></g>`,
		"fallback": "icon-park-solid:round-trip",
	});
}

export default Component;
