import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/joaokpbeo.css';
import '../../css/s/smvlfz72e.css';
import '../../css/e/ea608dg5t.css';
import '../../css/z/zb08tpbsq.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="joaokpbeo wm-shadow"/><path class="smvlfz72e wm-shadow"/><path class="ea608dg5t"/><path class="zb08tpbsq"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:server-off",
	});
}

export default Component;
