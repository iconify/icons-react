import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ii_d8kbgo.css';
import '../../css/i/if2tu-i3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ii_d8kbgo"/><path class="if2tu-i3c"/></g>`,
		"fallback": "icon-park-outline:scale",
	});
}

export default Component;
