import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/iwy_0ebnq.css';
import '../../css/c/cgki-fbwh.css';
import '../../css/g/gdz5xlb3m.css';
import '../../css/x/xqv8al4xo.css';
import '../../css/n/nht9sdbdo.css';
import '../../css/z/zqwa0hb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7IXQ9l2E" x1="8.25" x2="14.25" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7IXQ9l2E)" class="iwy_0ebnq"/><path class="cgki-fbwh wm-shine"/><path class="gdz5xlb3m wm-shine"/><path class="wm-shine xqv8al4xo"/><path class="nht9sdbdo wm-deco"/><path class="wm-deco zqwa0hb4y"/></g>`,
		"fallback": "withicons-utsav:music-note",
	});
}

export default Component;
