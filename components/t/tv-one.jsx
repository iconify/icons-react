import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/trpmdpxsa.css';
import '../../css/r/r367603ti.css';
import '../../css/e/e3js6e8az.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="trpmdpxsa"/><path class="r367603ti"/><path class="e3js6e8az"/></g>`,
		"fallback": "icon-park-outline:tv-one",
	});
}

export default Component;
