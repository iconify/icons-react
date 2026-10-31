import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/syoxkv5rj.css';
import '../../css/j/j0hc-sfrs.css';
import '../../css/c/csckwobll.css';
import '../../css/n/nvcu81sfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDgqDdcJK" x1="9" x2="15" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGDgqDdcJK)" class="syoxkv5rj"/><path class="j0hc-sfrs wm-shine"/><path class="csckwobll wm-shine"/><path class="nvcu81sfi wm-shine"/></g>`,
		"fallback": "withicons-utsav:message-circle-heart",
	});
}

export default Component;
