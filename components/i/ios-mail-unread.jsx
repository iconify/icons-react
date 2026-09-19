import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jijxp98_q.css';
import '../../css/t/t8j_1ujbr.css';
import '../../css/c/cq1ipmmsh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jijxp98_q"/><path class="t8j_1ujbr"/><path class="cq1ipmmsh"/>`,
		"fallback": "ion:ios-mail-unread",
	});
}

export default Component;
