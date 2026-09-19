import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/f/f98f8evyn.css';
import '../../css/n/nsqla6jpd.css';
import '../../css/w/wps4e9ynm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="f98f8evyn"/><path class="nsqla6jpd"/><path class="wps4e9ynm"/></g>`,
		"fallback": "flag:mg-1x1",
	});
}

export default Component;
