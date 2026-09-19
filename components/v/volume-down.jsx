import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lrejz_2gf.css';
import '../../css/p/pflujq7cq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="lrejz_2gf"/><path class="pflujq7cq"/></g>`,
		"fallback": "icon-park-outline:volume-down",
	});
}

export default Component;
