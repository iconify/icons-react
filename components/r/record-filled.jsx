import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqhjtfbwd.css';
import '../../css/e/em2q9nb2p.css';
import '../../css/m/mb0g7k26v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jqhjtfbwd"/><path class="em2q9nb2p"/><path class="mb0g7k26v"/></g>`,
		"fallback": "andrsrxn:record-filled",
	});
}

export default Component;
