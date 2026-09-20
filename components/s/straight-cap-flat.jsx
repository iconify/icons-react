import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d10j25_kc.css';
import '../../css/i/i5xwbzs4h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d10j25_kc"/><path clip-rule="evenodd" class="i5xwbzs4h"/></g>`,
		"fallback": "streamline-color:straight-cap-flat",
	});
}

export default Component;
