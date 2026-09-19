import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/ywlqk53zr.css';
import '../../css/k/ke7_51b1l.css';
import '../../css/m/mf2ewduld.css';
import '../../css/h/h7yxgm2uf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ywlqk53zr"/><path class="ke7_51b1l"/><path class="mf2ewduld"/><path class="h7yxgm2uf"/></g>`,
		"fallback": "circle-flags:mo",
	});
}

export default Component;
