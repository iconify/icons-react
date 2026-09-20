import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yq5lv8bxw.css';
import '../../css/j/j67r7rs_o.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="yq5lv8bxw"/><path class="j67r7rs_o"/></g>`,
		"fallback": "skill-icons:sentry",
	});
}

export default Component;
