import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/ns8048b7p.css';
import '../../css/u/u062b5big.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="ns8048b7p"/><path class="u062b5big"/></g>`,
		"fallback": "icon-park-outline:paypal",
	});
}

export default Component;
