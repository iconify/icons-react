import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2-oz292v.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/d/d32pn-bfm.css';
import '../../css/g/gep5v0brx.css';
import '../../css/u/uisxfqgmu.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGcm7mZdQN"><path class="q2-oz292v"/></clipPath></defs><g clip-path="url(#SVGcm7mZdQN)" transform="translate(51.3)scale(.9375)" class="nv9qcacyl"><path class="d32pn-bfm"/><path class="gep5v0brx"/><path class="uisxfqgmu"/></g>`,
		"fallback": "flag:nr-4x3",
	});
}

export default Component;
