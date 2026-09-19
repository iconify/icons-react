import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bxxidwbyl.css';
import '../../css/b/bbq1zobht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bxxidwbyl"/><path class="bbq1zobht"/></g>`,
		"fallback": "icon-park-outline:mouse-zodiac",
	});
}

export default Component;
