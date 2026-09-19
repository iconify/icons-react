import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/z6rve-slh.css';
import '../../css/s/s_bhinboa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="z6rve-slh"/><path class="s_bhinboa"/></g>`,
		"fallback": "icon-park-outline:round-trip",
	});
}

export default Component;
