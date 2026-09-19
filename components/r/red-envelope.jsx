import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ow3dj-axl.css';
import '../../css/l/l54so-d8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ow3dj-axl"/><path class="l54so-d8u"/></g>`,
		"fallback": "icon-park-outline:red-envelope",
	});
}

export default Component;
