import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/f/flz8fyicu.css';
import '../../css/b/b8c_z7brc.css';
import '../../css/j/j-dpmubjz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="flz8fyicu"/><path class="b8c_z7brc"/><path class="j-dpmubjz"/></g>`,
		"fallback": "icon-park-solid:kungfu",
	});
}

export default Component;
