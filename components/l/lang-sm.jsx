import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u31wb71rv.css';
import '../../css/m/m8qmwccqb.css';
import '../../css/e/etmx7-auk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="u31wb71rv"/><path class="m8qmwccqb"/><path class="etmx7-auk"/></g>`,
		"fallback": "circle-flags:lang-sm",
	});
}

export default Component;
