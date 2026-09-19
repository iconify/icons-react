import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hpdci4s6c.css';
import '../../css/j/jcslofkgd.css';
import '../../css/n/n96dz4x6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hpdci4s6c"/><path class="jcslofkgd"/><path class="n96dz4x6k"/></g>`,
		"fallback": "icon-park-outline:misaligned-semicircle",
	});
}

export default Component;
