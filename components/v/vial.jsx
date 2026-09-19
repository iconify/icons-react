import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cmtf-dnpo.css';
import '../../css/p/pjrd2oxhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="cmtf-dnpo"/><path class="pjrd2oxhy"/></g>`,
		"fallback": "icon-park-solid:vial",
	});
}

export default Component;
