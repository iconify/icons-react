import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/ql2oftrja.css';
import '../../css/n/n75x16bgq.css';
import '../../css/j/j5l0kbiuf.css';
import '../../css/e/ejyqcr5od.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="ql2oftrja"/><path class="n75x16bgq"/><path class="j5l0kbiuf"/><path class="ejyqcr5od"/></g>`,
		"fallback": "icon-park:platte",
	});
}

export default Component;
