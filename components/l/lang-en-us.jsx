import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/j_z595o6n.css';
import '../../css/c/cc3kinbvz.css';
import '../../css/m/mn49q7qak.css';
import '../../css/d/dzab0bbvq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="j_z595o6n"/><path class="cc3kinbvz"/><path class="mn49q7qak"/><path class="dzab0bbvq"/></g>`,
		"fallback": "circle-flags:lang-en-us",
	});
}

export default Component;
