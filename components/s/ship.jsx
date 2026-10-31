import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a9och473a.css';
import '../../css/x/xz1ip7bdb.css';
import '../../css/o/o_zcbcbdy.css';
import '../../css/b/b5nky5blj.css';
import '../../css/x/xnbx16bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a9och473a wm-shadow"/><path class="wm-shadow xz1ip7bdb"/><path class="o_zcbcbdy"/><path class="b5nky5blj"/><path class="xnbx16bkd"/></g>`,
		"fallback": "withicons-brutal:ship",
	});
}

export default Component;
