import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/psukg5b1p.css';
import '../../css/j/jz7w11b0h.css';
import '../../css/u/uu0aqvb3g.css';
import '../../css/d/d1x0gkpom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="psukg5b1p"/><circle class="jz7w11b0h"/><path class="uu0aqvb3g"/><path class="d1x0gkpom"/></g>`,
		"fallback": "icon-park:sickbed",
	});
}

export default Component;
