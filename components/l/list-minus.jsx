import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/bgc5gwb0d.css';
import '../../css/j/jv2nqgbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGA5kLmcXs" x1="9" x2="15" y1="5" y2="18.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGA5kLmcXs)" class="bgc5gwb0d"/><path class="jv2nqgbsa wm-s"/></g>`,
		"fallback": "withicons-utsav:list-minus",
	});
}

export default Component;
