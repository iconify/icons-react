import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/uqhhy6b8o.css';
import '../../css/r/rgid1o2rx.css';
import '../../css/v/vopqe3b4y.css';
import '../../css/z/zbr8iebbq.css';
import '../../css/x/xrppjjb4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="uqhhy6b8o"/><path class="rgid1o2rx"/><path class="vopqe3b4y"/><circle class="zbr8iebbq"/><path class="xrppjjb4d"/></g>`,
		"fallback": "circle-flags:kp",
	});
}

export default Component;
