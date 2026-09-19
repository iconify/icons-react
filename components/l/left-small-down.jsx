import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rzzvtwb2b.css';
import '../../css/m/mbkem2_rv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rzzvtwb2b"/><path class="mbkem2_rv"/></g>`,
		"fallback": "icon-park:left-small-down",
	});
}

export default Component;
