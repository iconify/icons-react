import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f2ykp2y6k.css';
import '../../css/s/s6_2p-rxf.css';
import '../../css/s/s0vg7idxu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="f2ykp2y6k"/><path class="s6_2p-rxf"/><path class="s0vg7idxu"/></g>`,
		"fallback": "icon-park-solid:single-bed",
	});
}

export default Component;
