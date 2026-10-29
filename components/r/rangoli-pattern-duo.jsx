import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ycr-ska1h.css';
import '../../css/p/p24ykb6pq.css';
import '../../css/w/wbjyenbnm.css';
import '../../css/x/xa2hfrbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ycr-ska1h"/><path class="p24ykb6pq wm-a"/><path class="wbjyenbnm wm-a"/><path class="xa2hfrbrx"/></g>`,
		"fallback": "withicons:rangoli-pattern-duo",
	});
}

export default Component;
