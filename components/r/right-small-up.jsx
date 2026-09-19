import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xvb1l6b4q.css';
import '../../css/q/qhxb-wx7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xvb1l6b4q"/><path class="qhxb-wx7w"/></g>`,
		"fallback": "icon-park:right-small-up",
	});
}

export default Component;
