import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tpe_wqd8w.css';
import '../../css/y/ysskwbk8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tpe_wqd8w"/><path class="ysskwbk8u"/></g>`,
		"fallback": "icon-park-outline:needle",
	});
}

export default Component;
