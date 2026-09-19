import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_dim4ogz.css';
import '../../css/q/quv6ix7kg.css';
import '../../css/s/s7zm_42kt.css';
import '../../css/t/tn0uqua-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_dim4ogz"/><rect class="quv6ix7kg"/><path class="s7zm_42kt"/><circle class="tn0uqua-i"/></g>`,
		"fallback": "icon-park-outline:master",
	});
}

export default Component;
