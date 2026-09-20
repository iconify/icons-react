import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4-p6eb0b.css';
import '../../css/l/lbof8_bsn.css';
import '../../css/c/c29gtoapi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j4-p6eb0b"/><path class="lbof8_bsn"/><path class="c29gtoapi"/></g>`,
		"fallback": "streamline-color:volcano",
	});
}

export default Component;
