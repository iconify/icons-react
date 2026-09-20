import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss3a5qvmd.css';
import '../../css/u/u_xkcvb2m.css';
import '../../css/d/dckmfac-n.css';
import '../../css/k/kdd976b_r.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGfGwZpcDD" clipPathUnits="userSpaceOnUse"><path class="ss3a5qvmd"/></clipPath></defs><g clip-path="url(#SVGfGwZpcDD)" transform="matrix(1.33333 0 0 -1.33333 0 2000)"><path class="u_xkcvb2m"/><path class="dckmfac-n"/><path class="kdd976b_r"/></g>`,
		"fallback": "material-icon-theme:pre-commit",
	});
}

export default Component;
