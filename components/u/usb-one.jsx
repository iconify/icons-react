import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ops5gxvvi.css';
import '../../css/b/bj3s_utsy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ops5gxvvi"/><path class="bj3s_utsy"/></g>`,
		"fallback": "icon-park-outline:usb-one",
	});
}

export default Component;
