import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo4a29mkc.css';
import '../../css/d/dyhwsbgkq.css';
import '../../css/b/bpojjymce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uo4a29mkc"/><path class="dyhwsbgkq"/><path class="bpojjymce"/></g>`,
		"fallback": "andrsrxn:volcano",
	});
}

export default Component;
