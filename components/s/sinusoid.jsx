import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kpxm58b9y.css';
import '../../css/o/odiz_iqsy.css';
import '../../css/i/ipuyzhukx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="kpxm58b9y"/><path class="odiz_iqsy"/><path class="ipuyzhukx"/></g>`,
		"fallback": "icon-park:sinusoid",
	});
}

export default Component;
