import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nygvwglbr.css';
import '../../css/n/nu991oelf.css';
import '../../css/t/t-ialtlgv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nygvwglbr"/><path clip-rule="evenodd" class="nu991oelf"/><path clip-rule="evenodd" class="t-ialtlgv"/></g>`,
		"fallback": "streamline-flex-color:target-flat",
	});
}

export default Component;
