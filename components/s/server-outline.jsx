import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdvk-d6wd.css';
import '../../css/x/xplmzjmbs.css';
import '../../css/e/e12p8hb9v.css';
import '../../css/a/ax8o968nq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gdvk-d6wd"><ellipse class="xplmzjmbs"/><path class="e12p8hb9v"/><path class="ax8o968nq"/></g>`,
		"fallback": "ion:server-outline",
	});
}

export default Component;
