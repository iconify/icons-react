import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipnu7nbcn.css';
import '../../css/i/i8lszep2s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ipnu7nbcn"/><path class="i8lszep2s"/></g>`,
		"fallback": "streamline-color:open-book-flat",
	});
}

export default Component;
