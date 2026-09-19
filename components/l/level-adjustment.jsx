import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mx_ovcmoo.css';
import '../../css/s/s10p-20lu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mx_ovcmoo"/><path class="s10p-20lu"/></g>`,
		"fallback": "icon-park-outline:level-adjustment",
	});
}

export default Component;
