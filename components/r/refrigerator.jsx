import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/przdtvn4g.css';
import '../../css/b/bjd584byl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="przdtvn4g"/><path class="bjd584byl"/></g>`,
		"fallback": "icon-park-outline:refrigerator",
	});
}

export default Component;
