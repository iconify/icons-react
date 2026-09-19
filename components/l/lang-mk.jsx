import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xba517gct.css';
import '../../css/g/gkjh98waa.css';
import '../../css/x/xk4b4y77u.css';
import '../../css/m/m32fw5efl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="xba517gct"/><path class="gkjh98waa"/><circle class="xk4b4y77u"/><circle class="m32fw5efl"/></g>`,
		"fallback": "circle-flags:lang-mk",
	});
}

export default Component;
