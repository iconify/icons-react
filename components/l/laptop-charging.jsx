import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2l9anbld.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2l9anbld"/>`,
		"fallback": "streamline:laptop-charging",
	});
}

export default Component;
