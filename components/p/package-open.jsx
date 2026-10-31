import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/o3icmpbei.css';
import '../../css/p/pm7mc66iy.css';
import '../../css/a/a00ll1lkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyxId7bgf" x1="9.01" x2="15.01" y1="1.51" y2="22.15" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyxId7bgf)" class="o3icmpbei"/><path class="pm7mc66iy wm-a"/><path class="a00ll1lkf wm-shine"/></g>`,
		"fallback": "withicons-utsav:package-open",
	});
}

export default Component;
