import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hderv6bjc.css';
import '../../css/u/u2p1seb2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hderv6bjc"/><path class="u2p1seb2u"/></g>`,
		"fallback": "icon-park-outline:printer-one",
	});
}

export default Component;
