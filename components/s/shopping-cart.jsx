import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/byxybxk8v.css';
import '../../css/u/ugab4l-cz.css';
import '../../css/e/efxbxab9w.css';
import '../../css/a/aa-o5vbck.css';
import '../../css/a/aify_jtew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFKaylB8d" x1="8.5" x2="14.5" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGFKaylB8d)" class="byxybxk8v"/><path class="ugab4l-cz wm-a"/><path class="efxbxab9w wm-shine"/><path class="aa-o5vbck wm-shine"/><path class="aify_jtew wm-shine"/></g>`,
		"fallback": "withicons-utsav:shopping-cart",
	});
}

export default Component;
