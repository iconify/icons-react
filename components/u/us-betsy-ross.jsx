import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pfmrfyugg.css';
import '../../css/e/e7nec2b-k.css';
import '../../css/q/q7fxrfbxx.css';
import '../../css/h/h1zxe6c2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="pfmrfyugg"/><path class="e7nec2b-k"/><path class="q7fxrfbxx"/><path class="h1zxe6c2d"/></g>`,
		"fallback": "circle-flags:us-betsy-ross",
	});
}

export default Component;
