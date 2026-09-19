import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o5e2melkj.css';
import '../../css/k/kq3muab2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o5e2melkj"/><path class="kq3muab2y"/></g>`,
		"fallback": "icon-park-outline:run-left",
	});
}

export default Component;
