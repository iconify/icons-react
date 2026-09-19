import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5ip8yb_e.css';

const viewBox = {"width":420,"height":810};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5ip8yb_e"/>`,
		"fallback": "il:mobile",
	});
}

export default Component;
