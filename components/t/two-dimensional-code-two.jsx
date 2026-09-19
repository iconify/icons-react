import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/lnvutvb4y.css';
import '../../css/s/sstindttr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="lnvutvb4y"/><path class="sstindttr"/></g>`,
		"fallback": "icon-park-outline:two-dimensional-code-two",
	});
}

export default Component;
