import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c61vgob9k.css';
import '../../css/v/v74lhdbnm.css';
import '../../css/o/o9w8dobrg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c61vgob9k"/><path clip-rule="evenodd" class="v74lhdbnm"/><path clip-rule="evenodd" class="o9w8dobrg"/></g>`,
		"fallback": "streamline-color:manual-book-flat",
	});
}

export default Component;
