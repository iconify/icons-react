import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjzrp5bve.css';
import '../../css/x/x1ob552sn.css';
import '../../css/n/n532j-0jq.css';
import '../../css/o/ow6yk2bvl.css';
import '../../css/y/y5ivewbjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGQ6e7CHXm" x1="1124.653" x2="1839.97" y1="-669.315" y2="-669.315" gradientTransform="matrix(.3694 0 0 -.3694 -322.747 -168.195)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pjzrp5bve"/><stop offset="1" class="x1ob552sn"/></linearGradient><path fill="url(#SVGQ6e7CHXm)" class="n532j-0jq"/><path class="ow6yk2bvl"/><path class="y5ivewbjg"/>`,
		"fallback": "selfhst:pi-hole",
	});
}

export default Component;
