import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/heo1q5uyj.css';
import '../../css/m/m3xu1ldqr.css';
import '../../css/q/qzb3rzbwv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="heo1q5uyj"/><path class="m3xu1ldqr"/><path class="qzb3rzbwv"/></g>`,
		"fallback": "circle-flags:lang-eu",
	});
}

export default Component;
