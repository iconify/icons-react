import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1ccb2w-q.css';
import '../../css/t/toaf3ebik.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1ccb2w-q"/><path class="toaf3ebik"/>`,
		"fallback": "material-icon-theme:php-elephant-pink",
	});
}

export default Component;
