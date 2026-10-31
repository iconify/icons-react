import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vu5hsac0o.css';
import '../../css/m/mxqq5lbuu.css';
import '../../css/o/o0ihot2mh.css';
import '../../css/j/j75bsibgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vu5hsac0o wm-shadow"/><path class="mxqq5lbuu wm-shadow"/><path class="o0ihot2mh"/><path class="j75bsibgj"/></g>`,
		"fallback": "withicons-brutal:scan",
	});
}

export default Component;
