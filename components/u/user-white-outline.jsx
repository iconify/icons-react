import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o00nz9qpp.css';
import '../../css/e/e3y_efb8k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="o00nz9qpp"/><path class="e3y_efb8k"/></g>`,
		"fallback": "lsicon:user-white-outline",
	});
}

export default Component;
