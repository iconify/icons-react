import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/p0efpsbyt.css';
import '../../css/h/h2x2yzbat.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="p0efpsbyt"/><path class="h2x2yzbat"/></g>`,
		"fallback": "icon-park-outline:voice",
	});
}

export default Component;
