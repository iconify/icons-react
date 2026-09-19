import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/ip73f5biq.css';
import '../../css/z/z40956d3w.css';
import '../../css/z/z_ys9qb9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ip73f5biq"/><path class="z40956d3w"/><path class="z_ys9qb9l"/></g>`,
		"fallback": "circle-flags:lang-ga",
	});
}

export default Component;
