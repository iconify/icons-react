import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/la2h-tb5c.css';
import '../../css/i/ixc5v1_hg.css';
import '../../css/d/dsg4aabmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="la2h-tb5c"/><path class="ixc5v1_hg"/><path class="dsg4aabmm"/></g>`,
		"fallback": "circle-flags:lang-ml",
	});
}

export default Component;
