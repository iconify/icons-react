import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/ld7frb8bm.css';
import '../../css/q/qc7hpnzde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ld7frb8bm"/><path class="qc7hpnzde"/></g>`,
		"fallback": "icon-park-outline:laptop",
	});
}

export default Component;
