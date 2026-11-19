import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/k/kwb-aacbo.css';
import '../../css/t/teftoab5c.css';
import '../../css/z/zeebxcbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="kwb-aacbo"/><path class="teftoab5c"/><path class="zeebxcbch"/></g>`,
		"fallback": "andrsrxn:user-lock",
	});
}

export default Component;
