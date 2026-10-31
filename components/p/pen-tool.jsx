import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/p8tnhqb9e.css';
import '../../css/r/rdmr1kiai.css';
import '../../css/m/mbvsmr5bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGeiOedbeW" x1="9.02" x2="15.02" y1="2.52" y2="21.43" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGeiOedbeW)" class="p8tnhqb9e"/><path class="rdmr1kiai wm-a"/><path class="mbvsmr5bi wm-shine"/></g>`,
		"fallback": "withicons-utsav:pen-tool",
	});
}

export default Component;
