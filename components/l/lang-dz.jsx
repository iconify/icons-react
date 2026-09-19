import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cw1-use3t.css';
import '../../css/o/o30gkif4n.css';
import '../../css/b/bdd0bowwe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="cw1-use3t"/><path class="o30gkif4n"/><path class="bdd0bowwe"/></g>`,
		"fallback": "circle-flags:lang-dz",
	});
}

export default Component;
