import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c210f-7ji.css';
import '../../css/i/i9l7_bcpm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c210f-7ji"/><path class="i9l7_bcpm"/>`,
		"fallback": "medical-icon:labor-delivery",
	});
}

export default Component;
