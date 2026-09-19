import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/v/vny9yrkph.css';
import '../../css/q/qyer0bbbd.css';
import '../../css/t/tm4lvc8dd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wj-7246uw"/><path class="vny9yrkph"/><path class="qyer0bbbd"/><path class="tm4lvc8dd"/></g>`,
		"fallback": "circle-flags:soviet-union",
	});
}

export default Component;
