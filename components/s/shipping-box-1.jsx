import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/s/sip6htrck.css';
import '../../css/q/q26l32b4q.css';
import '../../css/y/yx5oi7bkd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="sip6htrck"/><path class="q26l32b4q"/><path class="yx5oi7bkd"/></g>`,
		"fallback": "streamline-plump:shipping-box-1",
	});
}

export default Component;
