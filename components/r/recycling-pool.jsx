import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fqccj7xbq.css';
import '../../css/o/oip-mwbex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fqccj7xbq"/><path class="oip-mwbex"/></g>`,
		"fallback": "icon-park-outline:recycling-pool",
	});
}

export default Component;
