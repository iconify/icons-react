import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p5vqfqg0x.css';
import '../../css/r/rm0qh6bub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="p5vqfqg0x"/><path class="rm0qh6bub"/></g>`,
		"fallback": "icon-park-outline:rotation-horizontal",
	});
}

export default Component;
