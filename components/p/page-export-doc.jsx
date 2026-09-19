import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4w_9_brk.css';
import '../../css/h/h4t1d2bui.css';
import '../../css/c/cxk925tbr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4w_9_brk"/><path class="h4t1d2bui"/><path class="cxk925tbr"/>`,
		"fallback": "foundation:page-export-doc",
	});
}

export default Component;
