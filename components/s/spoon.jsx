import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/znwb00b4h.css';
import '../../css/d/dy-fnk7uq.css';
import '../../css/k/ke-m6xwkf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="znwb00b4h"/><path class="dy-fnk7uq"/><rect class="ke-m6xwkf"/></g>`,
		"fallback": "icon-park:spoon",
	});
}

export default Component;
