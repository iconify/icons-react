import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/x_tb5k8eq.css';
import '../../css/k/kkljqebrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG0WtlTdtf" x1="9" x2="15" y1="3.13" y2="20.88" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG0WtlTdtf)" class="x_tb5k8eq"/><path class="kkljqebrp wm-shine"/></g>`,
		"fallback": "withicons-utsav:more-vertical",
	});
}

export default Component;
