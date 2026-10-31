import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/f17_fssua.css';
import '../../css/b/b8lzv33vx.css';
import '../../css/p/pgxsxsb0m.css';
import '../../css/r/r04d860qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGy062OcGH" x1="9.01" x2="15.01" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGy062OcGH)" class="f17_fssua"/><path class="b8lzv33vx wm-a"/><path class="pgxsxsb0m wm-s"/><path class="r04d860qi wm-shine"/></g>`,
		"fallback": "withicons-utsav:screen-share",
	});
}

export default Component;
