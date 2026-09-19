import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rhvoe86hx.css';
import '../../css/r/rcjzao2my.css';
import '../../css/l/lq34il7_c.css';
import '../../css/a/am71s8dmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rhvoe86hx"/><path class="rcjzao2my"/><path class="lq34il7_c"/><path class="am71s8dmp"/></g>`,
		"fallback": "icon-park:tent-banner",
	});
}

export default Component;
