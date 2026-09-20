import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z-3-7paba.css';
import '../../css/h/hi-iqlg2z.css';
import '../../css/u/ul2finbnj.css';
import '../../css/s/sget89fql.css';
import '../../css/u/uu15i6ydm.css';
import '../../css/y/yr2vusnxh.css';
import '../../css/z/z4f5_ebln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z-3-7paba"/><path class="hi-iqlg2z"/><path class="ul2finbnj"/><path class="sget89fql"/><path class="uu15i6ydm"/><path class="yr2vusnxh"/><path class="z4f5_ebln"/></g>`,
		"fallback": "solar:safe-circle-line-duotone",
	});
}

export default Component;
