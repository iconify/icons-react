import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cbprcirqx.css';
import '../../css/g/gian8go6d.css';
import '../../css/j/j5udpybsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cbprcirqx"/><path class="gian8go6d"/><path class="j5udpybsm"/></g>`,
		"fallback": "covid:social-distancing-do-not-close-2",
	});
}

export default Component;
