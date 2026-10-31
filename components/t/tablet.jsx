import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jhw8rpbvb.css';
import '../../css/d/dqeww6vli.css';
import '../../css/a/afu1-h08w.css';
import '../../css/o/o834kibmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="jhw8rpbvb"/><path class="dqeww6vli wm-shine"/><path class="afu1-h08w wm-shine"/><path class="o834kibmi wm-shine"/></g>`,
		"fallback": "withicons-utsav:tablet",
	});
}

export default Component;
