import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwww_0gyb.css';
import '../../css/l/l5kwd3b8v.css';
import '../../css/r/r4s87stbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xwww_0gyb"/><path class="l5kwd3b8v"/><path class="r4s87stbt"/></g>`,
		"fallback": "andrsrxn:rotate",
	});
}

export default Component;
