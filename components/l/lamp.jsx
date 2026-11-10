import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dbyt6xbae.css';
import '../../css/l/lsy95ybjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dbyt6xbae"/><path class="lsy95ybjj"/></g>`,
		"fallback": "andrsrxn:lamp",
	});
}

export default Component;
