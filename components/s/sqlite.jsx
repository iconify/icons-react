import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzcvz811g.css';
import '../../css/q/qjsdyqb7c.css';
import '../../css/p/p517r1gxj.css';
import '../../css/d/dwxdt62ow.css';
import '../../css/c/cs6l8bcpn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG89VyEssG" x1="-15.615" x2="-6.741" y1="-9.108" y2="-9.108" gradientTransform="rotate(90 -90.486 64.634)scale(9.2712)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dzcvz811g"/><stop offset=".92" class="qjsdyqb7c"/><stop offset="1" class="qjsdyqb7c"/></linearGradient></defs><path class="p517r1gxj"/><path fill="url(#SVG89VyEssG)" class="dwxdt62ow"/><path class="cs6l8bcpn"/>`,
		"fallback": "devicon:sqlite",
	});
}

export default Component;
