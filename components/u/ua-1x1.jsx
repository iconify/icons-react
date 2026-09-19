import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/s/s7mvklbao.css';
import '../../css/w/wwoqqlb0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="s7mvklbao"/><path class="wwoqqlb0b"/></g>`,
		"fallback": "flag:ua-1x1",
	});
}

export default Component;
