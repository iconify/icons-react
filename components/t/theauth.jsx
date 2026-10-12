import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xr984lbhp.css';
import '../../css/p/pk4v8xyym.css';
import '../../css/l/l4o7_jb9n.css';
import '../../css/z/zc-pre9pt.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xr984lbhp"/><rect class="pk4v8xyym"/><rect class="l4o7_jb9n"/><rect class="zc-pre9pt"/></g>`,
		"fallback": "thesvg:theauth",
	});
}

export default Component;
