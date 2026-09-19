import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6d7aiw7i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6d7aiw7i"/>`,
		"fallback": "icons8:resize-horizontal",
	});
}

export default Component;
