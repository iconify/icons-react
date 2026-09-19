import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yva192q5g.css';
import '../../css/a/a-18_q9pu.css';
import '../../css/e/eni9fb9ec.css';
import '../../css/e/ernt7ebwn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="yva192q5g"/><path class="a-18_q9pu"/><path class="eni9fb9ec"/><path class="ernt7ebwn"/></g>`,
		"fallback": "icon-park:off-screen",
	});
}

export default Component;
