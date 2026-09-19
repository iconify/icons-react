import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/ck9lo8vwq.css';
import '../../css/w/w5ygmwb9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ck9lo8vwq"/><path class="w5ygmwb9j"/></g>`,
		"fallback": "icon-park-outline:short-skirt",
	});
}

export default Component;
