import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qzxdflb5t.css';
import '../../css/e/e-0l_rb_w.css';
import '../../css/f/fuhvn-u-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qzxdflb5t"/><path class="e-0l_rb_w"/><path class="fuhvn-u-b"/></g>`,
		"fallback": "icon-park-outline:new-lark",
	});
}

export default Component;
