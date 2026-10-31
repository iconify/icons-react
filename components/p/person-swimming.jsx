import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/fvfvg677j.css';
import '../../css/p/pmb9qvw4e.css';
import '../../css/n/npyspqb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWBZKodwV" x1="8.5" x2="14.5" y1="4.5" y2="20.93" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGWBZKodwV)" class="fvfvg677j"/><path class="pmb9qvw4e wm-a"/><path class="npyspqb1s wm-shine"/></g>`,
		"fallback": "withicons-utsav:person-swimming",
	});
}

export default Component;
