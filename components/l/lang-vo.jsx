import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/et9jo4i1e.css';
import '../../css/d/dgxwspzud.css';
import '../../css/d/d0nm50b0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="et9jo4i1e"/><path class="dgxwspzud"/><path class="d0nm50b0m"/></g>`,
		"fallback": "circle-flags:lang-vo",
	});
}

export default Component;
