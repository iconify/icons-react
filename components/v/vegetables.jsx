import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a008irbqj.css';
import '../../css/w/wjmydx_nr.css';
import '../../css/g/g-j2jqb9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="a008irbqj"/><path class="wjmydx_nr"/><path class="g-j2jqb9k"/></g>`,
		"fallback": "icon-park-outline:vegetables",
	});
}

export default Component;
