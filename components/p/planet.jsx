import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jjh499b3r.css';
import '../../css/v/van1pxdhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jjh499b3r"/><path class="van1pxdhn"/></g>`,
		"fallback": "icon-park-outline:planet",
	});
}

export default Component;
