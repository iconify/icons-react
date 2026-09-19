import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rptkid02y.css';
import '../../css/h/hk74r7aft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rptkid02y"/><path class="hk74r7aft"/></g>`,
		"fallback": "icon-park-outline:tips",
	});
}

export default Component;
