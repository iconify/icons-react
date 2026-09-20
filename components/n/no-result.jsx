import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rb2g5drqn.css';
import '../../css/w/w55rr2bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rb2g5drqn"/><path class="w55rr2bbz"/></g>`,
		"fallback": "tdesign:no-result",
	});
}

export default Component;
