import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wip1biitm.css';
import '../../css/b/b56omhbpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="wip1biitm"/><path class="b56omhbpq"/></g>`,
		"fallback": "icon-park-solid:left-expand",
	});
}

export default Component;
