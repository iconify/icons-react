import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-y6ppb6c.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-y6ppb6c"/>`,
		"fallback": "wi:time-6",
	});
}

export default Component;
