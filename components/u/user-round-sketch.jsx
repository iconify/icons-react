import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cql4d7ioj.css';
import '../../css/s/s95_oac6y.css';
import '../../css/o/o2_1jsbel.css';
import '../../css/k/kl1tskb-o.css';
import '../../css/x/xmw26lbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cql4d7ioj"/><path class="s95_oac6y wm-k"/><path class="o2_1jsbel wm-k"/><path class="kl1tskb-o wm-k"/><path class="wm-k xmw26lbcb"/></g>`,
		"fallback": "withicons:user-round-sketch",
	});
}

export default Component;
