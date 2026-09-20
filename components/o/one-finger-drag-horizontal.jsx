import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cx467-4vd.css';
import '../../css/i/igcs4cboh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cx467-4vd"/><path class="igcs4cboh"/></g>`,
		"fallback": "streamline-color:one-finger-drag-horizontal",
	});
}

export default Component;
