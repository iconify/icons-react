import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ud1zwkbmp.css';
import '../../css/h/h4md0cc7c.css';
import '../../css/r/rbyeil6uw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ud1zwkbmp"/><path class="h4md0cc7c"/><path class="rbyeil6uw"/></g>`,
		"fallback": "icon-park-solid:nut",
	});
}

export default Component;
