import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/t/tejlm40fe.css';
import '../../css/z/zn6qlpiwp.css';
import '../../css/j/jc8hfjbqp.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="scale(.64143 .96773)" class="nv9qcacyl"><rect transform="scale(.93865 .69686)" class="tejlm40fe"/><rect transform="scale(.93865 .69686)" class="zn6qlpiwp"/><path class="jc8hfjbqp"/></g>`,
		"fallback": "flag:lt-4x3",
	});
}

export default Component;
