import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mfauhsngm.css';
import '../../css/h/h39d0nilt.css';
import '../../css/i/ipdg3vquv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mfauhsngm"/><path class="h39d0nilt"/><path class="ipdg3vquv"/></g>`,
		"fallback": "icon-park-outline:sim",
	});
}

export default Component;
