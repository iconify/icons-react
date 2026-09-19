import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/v0-q1g0yp.css';
import '../../css/e/ek0p_6bek.css';
import '../../css/c/c8kagpbkr.css';
import '../../css/y/y5bhjvbnb.css';
import '../../css/d/dlvyx_bsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="v0-q1g0yp"/><path class="ek0p_6bek"/><path class="c8kagpbkr"/><path class="y5bhjvbnb"/><path class="dlvyx_bsv"/></g>`,
		"fallback": "circle-flags:us-ms",
	});
}

export default Component;
