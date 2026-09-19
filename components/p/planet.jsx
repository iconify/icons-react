import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kubqaqb-n.css';
import '../../css/v/van1pxdhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="kubqaqb-n"/><path class="van1pxdhn"/></g>`,
		"fallback": "icon-park-solid:planet",
	});
}

export default Component;
