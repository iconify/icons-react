import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x7n67kbaj.css';
import '../../css/h/hq7te623q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="x7n67kbaj"/><path class="hq7te623q"/></g>`,
		"fallback": "icon-park-solid:piano",
	});
}

export default Component;
