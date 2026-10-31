import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dzn15abcw.css';
import '../../css/s/sgnwjubyq.css';
import '../../css/x/xd8bhybwh.css';
import '../../css/p/p1efeh8ow.css';
import '../../css/c/cy8hghbff.css';
import '../../css/c/cx2olxb8h.css';
import '../../css/h/h-qvmzbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYJRgkGAz" x1="9" x2="15" y1="1" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGYJRgkGAz)" class="dzn15abcw"/><path class="sgnwjubyq wm-a"/><path class="wm-shine xd8bhybwh"/><path class="p1efeh8ow wm-shine"/><path class="cy8hghbff wm-shine"/><path class="cx2olxb8h wm-shine"/><path class="h-qvmzbsc wm-shine"/></g>`,
		"fallback": "withicons-utsav:timer",
	});
}

export default Component;
