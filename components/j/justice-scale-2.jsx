import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/koufdxgky.css';
import '../../css/p/p7els8bqv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="koufdxgky"/><path class="p7els8bqv"/></g>`,
		"fallback": "streamline-color:justice-scale-2",
	});
}

export default Component;
