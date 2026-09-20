import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jit9cw.css';
import '../../css/y/ydovum.css';
import '../../css/c/c_rqdr.css';
import '../../css/x/xhxeiv.css';
import '../../css/d/d-k-hl-x.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jit9cw ydovum"/><path class="c_rqdr ydovum"/><path class="xhxeiv ydovum"/>`,
		"fallback": "line-md:moon-rising-filled",
	});
}

export default Component;
