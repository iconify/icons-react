import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i5vk6db0m.css';
import '../../css/q/qhgxszy5m.css';
import '../../css/l/ljtyofbkq.css';
import '../../css/m/mlhmlnttr.css';
import '../../css/n/nem3swxdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i5vk6db0m"/><path class="qhgxszy5m wm-k"/><path class="ljtyofbkq wm-a"/><path class="mlhmlnttr wm-k"/><path class="nem3swxdk wm-a"/></g>`,
		"fallback": "withicons:message-square-text-sketch",
	});
}

export default Component;
