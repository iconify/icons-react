import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm5xl-bna.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/t/ts1pautut.css';
import '../../css/i/ird86_e6x.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGSZhguefA"><path class="wm5xl-bna"/></clipPath></defs><g clip-path="url(#SVGSZhguefA)" transform="translate(88 -32)" class="nv9qcacyl"><path class="ts1pautut"/><circle transform="translate(-168.4 8.6)scale(.76554)" class="ird86_e6x"/></g>`,
		"fallback": "flag:jp-4x3",
	});
}

export default Component;
