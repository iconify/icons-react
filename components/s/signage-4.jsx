import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g68p0v7pw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g68p0v7pw"/>`,
		"fallback": "streamline:signage-4",
	});
}

export default Component;
