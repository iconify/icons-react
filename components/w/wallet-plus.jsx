import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pfxsft_xh.css';
import '../../css/v/vsusj7ocd.css';
import '../../css/c/cuqjmsvam.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGBgS7qSkY)" class="cuyn6tgcc"><path clip-rule="evenodd" class="pfxsft_xh"/><path class="vsusj7ocd"/><path clip-rule="evenodd" class="cuqjmsvam"/></g><defs><clipPath id="SVGBgS7qSkY"><path class="w49j0rbvv"/></clipPath></defs></g>`,
		"fallback": "reicon:wallet-plus",
	});
}

export default Component;
