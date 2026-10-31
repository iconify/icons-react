import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/unjapft1d.css';
import '../../css/o/otbjaccwy.css';
import '../../css/w/weq50yb3s.css';
import '../../css/d/du8z9lkzy.css';
import '../../css/r/r9zwupzza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVGJiScbW" x1="9" x2="15" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVGJiScbW)" class="unjapft1d"/><path class="otbjaccwy wm-a"/><path class="weq50yb3s wm-shine"/><path class="du8z9lkzy wm-shine"/><path class="r9zwupzza wm-shine"/></g>`,
		"fallback": "withicons-utsav:tombstone",
	});
}

export default Component;
