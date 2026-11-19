import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zre2owbfg.css';
import '../../css/x/xfwc4uz2h.css';
import '../../css/b/b7o86ybkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zre2owbfg"/><path class="xfwc4uz2h"/><path class="b7o86ybkr"/></g>`,
		"fallback": "andrsrxn:trumpet",
	});
}

export default Component;
