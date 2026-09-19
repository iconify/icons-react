import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/eidp5qb7q.css';
import '../../css/u/um5hc2wws.css';
import '../../css/t/t_titybhs.css';
import '../../css/l/lp3lfdcfb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="eidp5qb7q"/><path class="um5hc2wws"/><path class="t_titybhs"/><path class="lp3lfdcfb"/></g>`,
		"fallback": "circle-flags:lang-ab",
	});
}

export default Component;
