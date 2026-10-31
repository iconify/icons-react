import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/v/vbm0nj1kv.css';
import '../../css/a/akbrhsbna.css';
import '../../css/u/uh6di0wke.css';
import '../../css/u/upd0nac4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG6vHrZbvL" x1="9" x2="15" y1="1.48" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG6vHrZbvL)" class="vbm0nj1kv"/><path class="akbrhsbna wm-a"/><path class="uh6di0wke wm-s"/><path class="upd0nac4c wm-shine"/></g>`,
		"fallback": "withicons-utsav:microphone-off",
	});
}

export default Component;
