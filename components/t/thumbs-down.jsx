import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itmrxab9d.css';
import '../../css/m/mhyf0xnak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="itmrxab9d"/><path class="mhyf0xnak"/></g>`,
		"fallback": "icon-park-outline:thumbs-down",
	});
}

export default Component;
