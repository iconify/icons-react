import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6i609scc.css';
import '../../css/c/cnc48xb-n.css';
import '../../css/r/rtbltcbsy.css';
import '../../css/a/au6cvt0tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6i609scc"/><path class="cnc48xb-n"/><path class="rtbltcbsy"/><path class="au6cvt0tc"/>`,
		"fallback": "token:swise",
	});
}

export default Component;
