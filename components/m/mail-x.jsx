import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/duih4jb0l.css';
import '../../css/y/y1ap_cude.css';
import '../../css/a/a0k2vdbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="duih4jb0l"/><path class="y1ap_cude"/><path class="a0k2vdbvx"/></g>`,
		"fallback": "andrsrxn:mail-x",
	});
}

export default Component;
