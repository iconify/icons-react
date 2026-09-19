import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e95yi8b2t.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e95yi8b2t"/>`,
		"fallback": "el:step-forward",
	});
}

export default Component;
