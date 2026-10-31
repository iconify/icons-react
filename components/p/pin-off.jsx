import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/o7_8am0ab.css';
import '../../css/s/svb__781g.css';
import '../../css/u/uh6di0wke.css';
import '../../css/b/bpl309bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG6tSrdpOs" x1="9.17" x2="15.17" y1="1.68" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG6tSrdpOs)" class="o7_8am0ab"/><path class="svb__781g wm-a"/><path class="uh6di0wke wm-s"/><path class="bpl309bsd wm-shine"/></g>`,
		"fallback": "withicons-utsav:pin-off",
	});
}

export default Component;
