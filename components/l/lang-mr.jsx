import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/uayjmu0vt.css';
import '../../css/j/jj2lsu2lp.css';
import '../../css/w/wy89v1izm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="uayjmu0vt"/><path class="jj2lsu2lp"/><path class="wy89v1izm"/></g>`,
		"fallback": "circle-flags:lang-mr",
	});
}

export default Component;
