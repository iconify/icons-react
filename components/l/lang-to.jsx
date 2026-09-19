import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u31wb71rv.css';
import '../../css/t/tznoqhb6c.css';
import '../../css/a/akjl27mhv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="u31wb71rv"/><path class="tznoqhb6c"/><path class="akjl27mhv"/></g>`,
		"fallback": "circle-flags:lang-to",
	});
}

export default Component;
