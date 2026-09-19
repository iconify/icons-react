import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/a/adxs15bqu.css';
import '../../css/v/vay9-8v2p.css';
import '../../css/n/n3f4a3bix.css';
import '../../css/t/t0uw7wbmr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="adxs15bqu"/><path class="vay9-8v2p"/><path class="n3f4a3bix"/><path class="t0uw7wbmr"/></g>`,
		"fallback": "icon-park:safe-retrieval",
	});
}

export default Component;
