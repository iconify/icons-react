import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/cpmingbdt.css';
import '../../css/d/djsmm_b-u.css';
import '../../css/q/qt-_jl24l.css';
import '../../css/e/euj2xlp9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="cpmingbdt"/><path class="djsmm_b-u wm-shine"/><path class="qt-_jl24l wm-shine"/><path class="euj2xlp9a wm-shine"/></g>`,
		"fallback": "withicons-utsav:user-circle",
	});
}

export default Component;
