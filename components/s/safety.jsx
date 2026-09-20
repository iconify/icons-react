import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/s/srz_u_got.css';
import '../../css/q/q2lyozz0h.css';
import '../../css/e/e7i08vb4v.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="srz_u_got"/><path class="q2lyozz0h"/><path class="e7i08vb4v"/></g>`,
		"fallback": "streamline-stickies-color:safety",
	});
}

export default Component;
