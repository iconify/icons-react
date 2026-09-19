import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/q59e6nb7s.css';
import '../../css/o/otc0fobjz.css';
import '../../css/q/qhk75d-ii.css';
import '../../css/c/cibj5pwcl.css';
import '../../css/e/e287swkfx.css';
import '../../css/s/svynlqbzt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="q59e6nb7s"/><path class="otc0fobjz"/><path class="qhk75d-ii"/><g class="cibj5pwcl"><path class="e287swkfx"/><path class="svynlqbzt"/></g></g>`,
		"fallback": "circle-flags:lang-bi",
	});
}

export default Component;
