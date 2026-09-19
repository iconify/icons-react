import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2i76-b5v.css';

const viewBox = {"width":29,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2i76-b5v"/>`,
		"fallback": "et:streetsign",
	});
}

export default Component;
