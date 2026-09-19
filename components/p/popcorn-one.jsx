import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xr61_3bgp.css';
import '../../css/i/ig18oqu2v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xr61_3bgp"/><path class="ig18oqu2v"/></g>`,
		"fallback": "icon-park-outline:popcorn-one",
	});
}

export default Component;
