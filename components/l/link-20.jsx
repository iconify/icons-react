import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xq8-zbc-v.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/c/c8pavbbjd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGV6imtets)" class="xq8-zbc-v"/><defs><linearGradient id="SVGV6imtets" x1="-3.143" x2="3.203" y1="2.5" y2="21.585" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="c8pavbbjd"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:link-20",
	});
}

export default Component;
