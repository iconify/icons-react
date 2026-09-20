import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9pq-abme.css';
import '../../css/b/b7k4vkb4y.css';
import '../../css/g/gcw1jebsm.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/k/kki4zxl5e.css';
import '../../css/u/ujseujbsm.css';
import '../../css/a/a847upcpg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k9pq-abme"><path class="b7k4vkb4y"/><circle class="gcw1jebsm"/></g><g class="x8poo_bjf"><ellipse class="kki4zxl5e"/><path class="ujseujbsm"/><path class="a847upcpg"/></g>`,
		"fallback": "openmoji:person-walking-medium-skin-tone",
	});
}

export default Component;
