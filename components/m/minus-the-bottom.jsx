import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/inz7yeb3h.css';
import '../../css/k/katd21ghy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="inz7yeb3h"/><path class="katd21ghy"/></g>`,
		"fallback": "icon-park-outline:minus-the-bottom",
	});
}

export default Component;
