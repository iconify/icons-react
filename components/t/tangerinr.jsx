import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ox22efwxq.css';
import '../../css/s/sz-ttxumc.css';
import '../../css/x/x68c9vb8y.css';
import '../../css/p/pcp6t0btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ox22efwxq"/><path class="sz-ttxumc"/><path class="x68c9vb8y"/><path class="pcp6t0btv"/></g>`,
		"fallback": "tdesign:tangerinr",
	});
}

export default Component;
