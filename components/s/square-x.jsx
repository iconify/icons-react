import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/y/yhl_u8ifr.css';
import '../../css/l/ldaecqbme.css';
import '../../css/s/sz2_x4f1m.css';
import '../../css/d/d30_rj4ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7oIkc70U" x1="9" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG7oIkc70U)" class="yhl_u8ifr"/><path class="ldaecqbme wm-shine"/><path class="sz2_x4f1m wm-shine"/><path class="d30_rj4ki wm-shine"/></g>`,
		"fallback": "withicons-utsav:square-x",
	});
}

export default Component;
