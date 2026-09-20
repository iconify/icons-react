import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v11_qcbal.css';
import '../../css/e/e9gw0tbbs.css';
import '../../css/w/wo2jc8b8t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v11_qcbal"/><path class="e9gw0tbbs"/><path class="wo2jc8b8t"/></g>`,
		"fallback": "streamline-color:pyramid-shape",
	});
}

export default Component;
