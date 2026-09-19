import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qqjbmbccq.css';
import '../../css/x/xoi7_t6rr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qqjbmbccq"/><path class="xoi7_t6rr"/></g>`,
		"fallback": "icon-park:triangular-pyramid",
	});
}

export default Component;
