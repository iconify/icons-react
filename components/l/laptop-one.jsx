import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bl312vbyc.css';
import '../../css/s/s4jn_bwbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bl312vbyc"/><path class="s4jn_bwbz"/></g>`,
		"fallback": "icon-park-solid:laptop-one",
	});
}

export default Component;
