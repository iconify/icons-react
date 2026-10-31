import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/egnb4-v-f.css';
import '../../css/a/a-n52ci5u.css';
import '../../css/j/jys31xb7p.css';
import '../../css/e/e6lviwbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGjQckPfAX" x1="9" x2="15" y1="5.23" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="egnb4-v-f wm-s"/><path fill="url(#SVGjQckPfAX)" class="a-n52ci5u"/><path class="jys31xb7p wm-s"/><path class="e6lviwbki wm-shine"/></g>`,
		"fallback": "withicons-utsav:paper-fan",
	});
}

export default Component;
