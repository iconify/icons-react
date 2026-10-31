import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jb7qab1-n.css';
import '../../css/d/djy9sub2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGInWAfNOR" x1="8.75" x2="14.75" y1="3.52" y2="20.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGInWAfNOR)" class="jb7qab1-n"/><path class="djy9sub2v wm-shine"/></g>`,
		"fallback": "withicons-utsav:reply",
	});
}

export default Component;
