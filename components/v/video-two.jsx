import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zay1jacum.css';
import '../../css/j/j60auacns.css';
import '../../css/x/x0x2libsd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zay1jacum"/><path class="j60auacns"/><path class="x0x2libsd"/></g>`,
		"fallback": "icon-park-solid:video-two",
	});
}

export default Component;
