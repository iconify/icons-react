import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/n03w5kbkh.css';
import '../../css/m/mq16e8bmh.css';
import '../../css/m/m3hasrx1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="n03w5kbkh"/><path class="mq16e8bmh"/><path class="m3hasrx1m"/></g>`,
		"fallback": "icon-park-outline:nine-key",
	});
}

export default Component;
