import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yez-whi-k.css';
import '../../css/t/tecd9cbwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="yez-whi-k"/><path class="tecd9cbwk"/></g>`,
		"fallback": "icon-park-solid:nine-points-connected",
	});
}

export default Component;
