import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d58itublv.css';
import '../../css/y/y6uzgk7ws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d58itublv"/><path class="y6uzgk7ws"/></g>`,
		"fallback": "icon-park-outline:reject",
	});
}

export default Component;
