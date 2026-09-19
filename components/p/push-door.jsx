import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mxp84ibzr.css';
import '../../css/v/v1c5nqghq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mxp84ibzr"/><path class="v1c5nqghq"/></g>`,
		"fallback": "icon-park-outline:push-door",
	});
}

export default Component;
