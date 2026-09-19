import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/ww3yploev.css';
import '../../css/k/k3l1q-biz.css';
import '../../css/l/li6ifibis.css';
import '../../css/q/q5ne23bvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ww3yploev"/><path class="k3l1q-biz"/><path class="li6ifibis"/><path class="q5ne23bvp"/></g>`,
		"fallback": "icon-park:switch",
	});
}

export default Component;
