import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cmtf-dnpo.css';
import '../../css/x/x0l0vcc5c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="cmtf-dnpo"/><path class="x0l0vcc5c"/></g>`,
		"fallback": "icon-park-outline:vial",
	});
}

export default Component;
