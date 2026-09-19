import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/c/c9avuobgl.css';
import '../../css/r/rqq99yb_b.css';
import '../../css/n/nd0-tw5ji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wj-7246uw"/><path class="c9avuobgl"/><path class="rqq99yb_b"/><path class="nd0-tw5ji"/></g>`,
		"fallback": "circle-flags:us-ar",
	});
}

export default Component;
