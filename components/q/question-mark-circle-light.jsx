import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uuky_gise.css';
import '../../css/t/tvgcsmq7b.css';
import '../../css/m/m2_gr2xhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="uuky_gise"/><path class="tvgcsmq7b"/><path class="m2_gr2xhk"/></g>`,
		"fallback": "iconamoon:question-mark-circle-light",
	});
}

export default Component;
