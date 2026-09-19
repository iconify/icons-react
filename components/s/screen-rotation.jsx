import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/f2e3a6bxc.css';
import '../../css/t/tmsi3nbrx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="f2e3a6bxc"/><path class="tmsi3nbrx"/></g>`,
		"fallback": "icon-park-solid:screen-rotation",
	});
}

export default Component;
