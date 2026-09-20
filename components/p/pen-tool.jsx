import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6yp67b1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6yp67b1p"/>`,
		"fallback": "streamline:pen-tool",
	});
}

export default Component;
