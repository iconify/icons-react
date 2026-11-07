import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cit_55o-r.css';
import '../../css/t/t1_7z3t8t.css';
import '../../css/b/b91a24b_q.css';
import '../../css/l/lxnzn9nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cit_55o-r"/><path class="t1_7z3t8t"/><path class="b91a24b_q"/><path class="lxnzn9nmw"/></g>`,
		"fallback": "solar:send-twice-square-line-duotone",
	});
}

export default Component;
