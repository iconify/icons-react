import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/aafymk54s.css';
import '../../css/h/haepy696s.css';
import '../../css/x/x9o47uzpy.css';
import '../../css/s/s8lm5clux.css';
import '../../css/e/ejs35enop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="aafymk54s"/><path class="haepy696s"/><path class="x9o47uzpy"/><path class="s8lm5clux"/><path class="ejs35enop"/></g>`,
		"fallback": "circle-flags:lang-sl",
	});
}

export default Component;
