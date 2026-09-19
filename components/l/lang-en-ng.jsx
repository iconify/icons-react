import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/nnbchob0p.css';
import '../../css/v/v0zpewbyq.css';
import '../../css/e/eec2tedcw.css';
import '../../css/y/yvjv1pirb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="nnbchob0p"/><path class="v0zpewbyq"/><path class="eec2tedcw"/><path class="yvjv1pirb"/></g>`,
		"fallback": "circle-flags:lang-en-ng",
	});
}

export default Component;
