import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/t/tnva5duer.css';
import '../../css/i/ixl6s1ssc.css';
import '../../css/z/zh84q581l.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="tnva5duer"/><path class="ixl6s1ssc"/><path class="zh84q581l"/></g>`,
		"fallback": "flag:mg-4x3",
	});
}

export default Component;
