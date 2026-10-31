import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/bn_pg3ace.css';
import '../../css/o/ooos0nm0a.css';
import '../../css/g/gwx-3zbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHKhIpe7e" x1="9" x2="15" y1="1" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGHKhIpe7e)" class="bn_pg3ace"/><path class="ooos0nm0a wm-s"/><path class="gwx-3zbim wm-shine"/></g>`,
		"fallback": "withicons-utsav:remote-control",
	});
}

export default Component;
