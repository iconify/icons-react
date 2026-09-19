import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfj17wbhw.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/c/cgf8vabde.css';
import '../../css/k/kcwsz79ph.css';
import '../../css/y/ywxb9tirb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dfj17wbhw"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><rect class="cgf8vabde"/><path class="kcwsz79ph"/><path class="ywxb9tirb"/></g>`,
		"fallback": "icon-park:locking-picture",
	});
}

export default Component;
