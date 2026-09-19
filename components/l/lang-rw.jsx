import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zz7c-w6eh.css';
import '../../css/i/ieaqfl2cu.css';
import '../../css/i/ikatgjnuw.css';
import '../../css/w/wwwqcnynk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="zz7c-w6eh"/><path class="ieaqfl2cu"/><path class="ikatgjnuw"/><path class="wwwqcnynk"/></g>`,
		"fallback": "circle-flags:lang-rw",
	});
}

export default Component;
