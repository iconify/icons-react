import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_xguwbvv.css';
import '../../css/v/vi2mx_f1p.css';
import '../../css/q/qpbfc2cnj.css';
import '../../css/r/rb-tou10q.css';
import '../../css/x/xh-a5sbti.css';
import '../../css/p/p3wr7td-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_xguwbvv wm-k"/><path class="vi2mx_f1p wm-k"/><path class="qpbfc2cnj wm-k"/><path class="rb-tou10q wm-a"/><path class="wm-a xh-a5sbti"/><path class="p3wr7td-o wm-a"/></g>`,
		"fallback": "withicons-anime:list-tree",
	});
}

export default Component;
