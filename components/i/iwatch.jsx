import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uaf3_62mx.css';
import '../../css/a/av9l1ko1u.css';
import '../../css/b/basw9ubgc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="uaf3_62mx"/><path class="av9l1ko1u"/><path class="basw9ubgc"/></g>`,
		"fallback": "icon-park-outline:iwatch",
	});
}

export default Component;
