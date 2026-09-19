import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qpcqvmvcn.css';
import '../../css/y/ywx-y6bsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qpcqvmvcn"/><path class="ywx-y6bsq"/></g>`,
		"fallback": "icon-park-outline:selected-focus",
	});
}

export default Component;
