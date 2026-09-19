import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u1qtw7b2b.css';
import '../../css/u/u6t9lrs4u.css';
import '../../css/q/qqpblxf5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="u1qtw7b2b"/><path class="u6t9lrs4u"/><path class="qqpblxf5z"/></g>`,
		"fallback": "icon-park-solid:stethoscope",
	});
}

export default Component;
