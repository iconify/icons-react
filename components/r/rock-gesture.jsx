import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tjw-xwbxp.css';
import '../../css/t/ti_16eb_i.css';
import '../../css/h/htl7ndbhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tjw-xwbxp"/><rect class="ti_16eb_i"/><rect class="htl7ndbhh"/></g>`,
		"fallback": "icon-park-outline:rock-gesture",
	});
}

export default Component;
