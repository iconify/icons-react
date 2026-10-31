import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/d15o92b3s.css';
import '../../css/q/qdpac6b1f.css';
import '../../css/p/pxqhvobew.css';
import '../../css/h/hlso5quso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="d15o92b3s"/><path class="qdpac6b1f wm-shine"/><path class="pxqhvobew wm-shine"/><path class="hlso5quso wm-shine"/></g>`,
		"fallback": "withicons-utsav:washing-machine",
	});
}

export default Component;
