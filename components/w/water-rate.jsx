import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wy34l7bwz.css';
import '../../css/j/jk8ff9tlc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wy34l7bwz"/><path class="jk8ff9tlc"/></g>`,
		"fallback": "icon-park-outline:water-rate",
	});
}

export default Component;
