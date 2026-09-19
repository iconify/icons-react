import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/a2u_w5bup.css';
import '../../css/e/e87e_9z0v.css';
import '../../css/i/iwoqd0a5y.css';
import '../../css/i/i2aga6b0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="a2u_w5bup"/><path class="e87e_9z0v"/><path class="iwoqd0a5y"/><path class="i2aga6b0s"/></g>`,
		"fallback": "circle-flags:vu",
	});
}

export default Component;
