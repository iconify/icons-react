import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xm1lv7b-r.css';
import '../../css/e/e8p--9_xn.css';
import '../../css/i/ik7gh80-w.css';
import '../../css/p/pu01xn-qp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xm1lv7b-r"/><path class="e8p--9_xn"/><path class="ik7gh80-w"/><path class="pu01xn-qp"/></g>`,
		"fallback": "glyphs:link-1-outline",
	});
}

export default Component;
