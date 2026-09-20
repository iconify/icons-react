import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bunby8b1u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bunby8b1u"/>`,
		"fallback": "streamline:justice-scale-2",
	});
}

export default Component;
