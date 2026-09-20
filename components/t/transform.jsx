import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krd9s8bqq.css';
import '../../css/q/qv3vjwbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="krd9s8bqq"/><path class="qv3vjwbci"/></g>`,
		"fallback": "tdesign:transform",
	});
}

export default Component;
