import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xpheex9cc.css';
import '../../css/m/mfbnmqh5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="xpheex9cc"/><path class="mfbnmqh5k"/></g>`,
		"fallback": "streamline-cyber:report-problem-warning-hexagon",
	});
}

export default Component;
