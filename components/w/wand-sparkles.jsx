import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j3tr00tly.css';
import '../../css/l/lnbrrnpeg.css';
import '../../css/x/xzetkxbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQnjaEd1S" x1="9.15" x2="15.15" y1="1.51" y2="21.95" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGQnjaEd1S)" class="j3tr00tly"/><path class="lnbrrnpeg wm-a"/><path class="wm-shine xzetkxbaf"/></g>`,
		"fallback": "withicons-utsav:wand-sparkles",
	});
}

export default Component;
