import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/l/l5c1x-pnh.css';
import '../../css/u/u949twblh.css';
import '../../css/h/h8l4uir8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="wj-7246uw"/><g class="l5c1x-pnh"><path class="u949twblh"/><path class="h8l4uir8h"/></g></g>`,
		"fallback": "circle-flags:lang-tr",
	});
}

export default Component;
