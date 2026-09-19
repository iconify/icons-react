import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w3flcy8mp.css';
import '../../css/y/y-asov6za.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="w3flcy8mp"/><path class="y-asov6za"/></g>`,
		"fallback": "icon-park-outline:paragraph-break",
	});
}

export default Component;
