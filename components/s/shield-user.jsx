import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/n8sx7hbxt.css';
import '../../css/n/n0z2mnqcc.css';
import '../../css/t/tmy9cbb4j.css';
import '../../css/x/xxuwrkb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="n8sx7hbxt"/><path class="n0z2mnqcc wm-shine"/><path class="tmy9cbb4j wm-shine"/><path class="wm-shine xxuwrkb0m"/></g>`,
		"fallback": "withicons-utsav:shield-user",
	});
}

export default Component;
