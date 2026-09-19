import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bgsd25l1y.css';
import '../../css/z/zdklvc37u.css';
import '../../css/d/drmk0woyt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="bgsd25l1y"/><path class="zdklvc37u"/><path class="drmk0woyt"/></g>`,
		"fallback": "circle-flags:uk",
	});
}

export default Component;
