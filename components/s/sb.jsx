import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cerazxb3v.css';
import '../../css/p/p7g9b60_x.css';
import '../../css/t/t19qk_bxn.css';
import '../../css/s/s6ecdhm2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cerazxb3v"/><path class="p7g9b60_x"/><path class="t19qk_bxn"/><path class="s6ecdhm2r"/></g>`,
		"fallback": "circle-flags:sb",
	});
}

export default Component;
