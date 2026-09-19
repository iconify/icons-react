import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fvi966b2b.css';
import '../../css/m/myp7lhbii.css';
import '../../css/a/a32h-obdx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="fvi966b2b"/><path class="myp7lhbii"/><path class="a32h-obdx"/></g>`,
		"fallback": "icon-park:text-italic",
	});
}

export default Component;
