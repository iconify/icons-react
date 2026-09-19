import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/me_ua9s0y.css';
import '../../css/o/o1xiz1bxm.css';
import '../../css/l/l54so-d8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="me_ua9s0y"/><path class="o1xiz1bxm"/><path class="l54so-d8u"/></g>`,
		"fallback": "icon-park-solid:red-envelope",
	});
}

export default Component;
