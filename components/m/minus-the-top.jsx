import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c0rwu5bdl.css';
import '../../css/l/lnr6n0bgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c0rwu5bdl"/><path class="lnr6n0bgh"/></g>`,
		"fallback": "icon-park-solid:minus-the-top",
	});
}

export default Component;
